import { useState, useEffect } from "react";
import CartProduct from "../Components/CartProduct";
import CartSummary from "../Components/CartSummary";
import { Loading } from "../Components/Loading";
import { getProducts } from "../Services/ProductServices";
import "../Static/Cart.css"

//TODO

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
            <main>
                <header className="header-container">
                    <h5 className="section-title">Shopping Cart</h5>
                    <span className="count">3 items in the bag</span>
                </header>    
                <section className="container">
                    <ul className="products">
                        {products.map(product => {return <CartProduct key={product.id} data={{...product.data(), id: product.id}}/>})}
                    </ul>
                </section>
                <CartSummary/>
            </main>
        </Loading>
    )}
