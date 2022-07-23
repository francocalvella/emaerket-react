import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { add } from "../../Services/ProductServices";
import { useNavigate } from "react-router-dom";


export default function LoadProduct(){
    const { register, handleSubmit} = useForm();
    const redirect = useNavigate();
    const submitHandler = async(data) =>{
        try{
            await add(data)
            redirect("/products")
        }catch(e){
            console.error(e)
        }
    }
    return(
    <main className='d-flex justify-content-center align-items-center'>
        <Form className="rounded p-4 p-sm-3" action="POST" onSubmit={handleSubmit(submitHandler)}>
        <h2>Post yout product</h2>
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
        <Button variant="primary" type="submit">
            Post
        </Button>
        </Form>
    </main>
        
    )

}

