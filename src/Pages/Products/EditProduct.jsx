import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import { deleteProduct, getProductById, update } from '../../Services/ProductServices';
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../Config/firebase';
import { deleteObject, ref } from 'firebase/storage';



export function EditProduct(){
    const [loading, setLoading] = useState(true) 
    const [img, setImg] = useState(null) 
    const [newImg, setNewImg] = useState(null) 
    const redirect = useNavigate() 
    const {id} = useParams()
    const { register, handleSubmit, setValue} = useForm();
    const submitHandler = async(data) =>{
        try{
            setLoading(true)
            if(newImg){
                const totalData = {...data, img: newImg}
                console.log(totalData)
                const imageRef = ref(storage, img.path) 
                await deleteObject(imageRef)
                await update(id, totalData)
                redirect("/products")
            }else{
                const totalData = {...data, img}
                await update(id, totalData)
                redirect("/products")
            }
        }catch(e){
            console.error(e)
        }
    }
    async function onDelete(){
        try{
            await deleteProduct(id)
            redirect("/products")
        }catch(e){
            console.error(e)
        }
    }

    async function changeImg(newImg){
    }

    useEffect(()=>{

        async function request(){
            const response = await getProductById(id)    
            setLoading(false)
            setValue("name", response.data().name)
            setValue("value", response.data().value)
            setValue("description", response.data().description)
            setValue("type", response.data().type)
            setImg(response.data().img)
        }
        request()
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
        <main className='d-flex justify-content-center align-items-center'>
            <Form className="rounded p-4 p-sm-3" action="POST" onSubmit={handleSubmit(submitHandler)}>
            <h2>Edit your product</h2>
            <Form.Group className="mb-3" controlId="formBasicText">
                <img src={newImg || img.url} type="file" width='300px'/>
                <Form.Control type='file' onChange={(event)=>setNewImg(event.target.files[0])}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Product name</Form.Label>
                <Form.Control type="text" placeholder="Enter the name of the product" {...register("name", { required: true })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter the price" {...register("value", { required: true })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter a brief description" {...register("description", { required: true })}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSelect">
                <Form.Select {...register("type", { required: true })}>
                    <option value="e-guitar">Electric guitar</option>
                    <option value="b-guitar">Bass guitar</option>
                    <option value="a-guitar">Acoustic guitar</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" style={{margin: "5px"}}>
                Edit
            </Button>
            <Button variant="danger" onClick={onDelete} style={{margin: "5px"}}>
                Delete
            </Button>
            </Form>

        </main>
        )

    }
}