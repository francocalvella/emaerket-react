import { useState, useEffect } from "react";
import { getProducts } from "../../Services/ProductServices";
import { Product } from './../../Components/Product';
import {Loading} from '../../Components/Loading'
import { SearchBar } from './../../Components/SearchBar';


export function Products(){
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState('')
    const [search, setSearch] = useState(null)
    const [filter, setFilter] = useState("")
    function onChange(event){
        setValue(event.target.value)
        let res = products.filter((item)=>{
            return item.data()?.name?.includes(value)
        })
        setSearch(res)
        if(!event.target.value){
            setSearch(null)
        }
    }

    function onClick(event){
        setFilter({name: event.target.innerHTML,
                 id: `${event.target.innerHTML[0].toLowerCase()}-guitar`})
    }

    function clear(){
        setFilter("")
    }

    useEffect(()=>{
        async function request(){
            try {
                const res = await getProducts(filter.id)
                setProducts(res)              
                setLoading(false)
            } catch (error) {
                console.error(error)
            }
        }
        request()
    }, [filter] )


    return (
        <Loading loading={loading}>
            <section className="search-bar-container">
                <SearchBar func={onChange} value={value}/>
            </section>
            <div className="main-container">
                <section className="filters-container">
                    <span id="checked-list">
                        {filter &&<p className="filter" onClick={clear}>X {filter.name}</p>}
                    </span>
                    <p>Type of instrument</p>
                    <span id="e-guitar" onClick={onClick}>Electric Guitar</span>
                    <span id="a-guitar" onClick={onClick}>Acoustic Guitar</span>
                    <span id="b-guitar" onClick={onClick}>Bass Guitar</span>
                </section>
                <div className="products-container">
                    {(search && search.map(productData=> <Product key={productData.id} 
                    data={{...productData.data(), ...{id: productData.id}}} />))
                    || products.map(productData=> <Product key={productData.id} 
                        data={{...productData.data(), ...{id: productData.id}}} />)
                    }
                </div>
            </div>
        </Loading>
    )
}