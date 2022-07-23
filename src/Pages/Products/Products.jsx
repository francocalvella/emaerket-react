import { useState, useEffect } from "react";
import { getProducts } from "../../Services/ProductServices";
import { Product } from './../../Components/Product';
import {Loading} from '../../Components/Loading'
import { SearchBar } from './../../Components/SearchBar';


export function Products(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

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
    }, [] )


    return (
        <Loading loading={loading}>
            <section className="search-bar-container">
                <SearchBar/>
            </section>
            <div className="main-container">
                <section className="filters-container">
                    <span id="checked-list"></span>
                    <p>Type of instrument</p>
                    <span>Electric Guitar</span>
                    <span>Acoustic Guitar</span>
                    <span>Bass Guitar</span>
                </section>
                <div className="products-container">
                    {products.map(productData=> <Product key={productData.id} data={{...productData.data(), ...{id: productData.id}}}/>)}
                </div>
            </div>
        </Loading>
    )

        


}