import guitar from './../../Static/assets/guitar.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { getProductById } from '../../Services/ProductServices';
import Spinner from 'react-bootstrap/Spinner'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import AuthContext from '../../Context/AuthContext';


export function ReadProduct(){
    const [product, setProduct] = useState({}) 
    const [loading, setLoading] = useState(true)  
    const {id} = useParams()

    useEffect(()=>{
        getProductById(id)
        .then(res=>{
            setProduct(res.data())
            setLoading(false)
        })
    }, [id])

    if(loading){
        return(
            <div className="main-loading">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            )
    }else{
        return(
            <AuthContext.Consumer>
                {
                    context =>
                    <>
                        <div className='read-container'>
                            <div>
                                <img src={guitar} alt="Product" width='300px' />
                            </div>
                            <div className='read-card'>
                                <h1>{product.name}</h1>
                                <b>$ {product.value}</b>
                                <p>{product.description}</p>
                                <Button as={Link} to={(context.isLogged && '/products/'+ id +'/edit/') || '/login'} variant="primary">Edit</Button>
                            </div>
                        </div>
                    </>
                }
            </AuthContext.Consumer>
        )

    }
}