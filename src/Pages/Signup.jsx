import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import firebase from './../Config/firebase';
import { useState } from 'react';
import { AlertCustom } from './../Components/AlertCustom';



export default function Signup(){
    const { register, handleSubmit} = useForm();
    const [alert, setAlert] = useState({variant:'', text:''})
    const submitHandler = async(data) =>{
        try{
            if(data.password===data.password2){
                const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                if(responseUser?.user?.uid){
                    await firebase.firestore().collection('ususarios')
                    .add({
                        email: data.email,
                        name: data.name,
                        lastname: data.lastname,
                        userId: responseUser?.user?.uid 
                    })
                    setAlert({variant:'success',text:`${data.name} has been created. Use your email to access`})
                }
            }else{
                setAlert({variant:'danger',text:'The passwords do not match'})
            }
        }catch(e){
            setAlert({variant:'danger',text:e.message})}
    }

    return(
    <main>

    <div className='d-flex justify-content-center align-items-center'>
        <Form className="rounded p-4 p-sm-3" action="POST" onSubmit={handleSubmit(submitHandler)}>
        <h2>Sign up!</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" {...register("email", { required: true })}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" {...register("name")}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Enter your lastname" {...register("lastname")}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" {...register("password", { required: true })}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Repeat your password</Form.Label>
            <Form.Control type="password" placeholder="Repeat your password" {...register("password2", { required: true })}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    </div>
    <AlertCustom {...alert}/>
    </main>
        
    )

}

 