import { useState, useEffect} from "react";
import CartProduct from "../Components/CartProduct";
import CartSummary from "../Components/CartSummary";
import { Loading } from "../Components/Loading";
import { getProducts } from "../Services/ProductServices";
import "../Static/Cart.css"
import CartContext from "../Context/CartContext"


export function Cart(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function request(){
            try {
                const res = await getProducts()
                setProducts(res)              
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        request()
    }, [])

    return (
        <Loading loading={loading}>
                <CartContext.Consumer>
                    {
                        context =>
                        <main>
                            <header className="header-container">
                                <h5 className="section-title">Shopping Cart</h5>
                                <span className="count">{context.cart.length} items in the bag</span>
                            </header>    
                            <section className="container">
                                <ul className="products">
                                    {products.map(product => {return <CartProduct key={product.id} 
                                    data={{...product.data(), id: product.id}}/>})
                                    .filter(product=>context.cart.includes(product.props.data.id))}
                                </ul>
                            </section>
                            {
                                (context.cart && <CartSummary cart={products
                                    .filter(product=>context.cart.includes(product.id))}/>) ||
                                <CartSummary/>
                            }
                        </main>
                    }
                </CartContext.Consumer>
        </Loading>
    )}
