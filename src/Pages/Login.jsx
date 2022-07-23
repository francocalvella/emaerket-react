import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom';
import { authUser, getUserById } from './../Services/AuthServices';
import { AlertCustom } from './../Components/AlertCustom';
import {useState} from 'react'



function Login(){
    const { register, handleSubmit} = useForm();
    const [alert, setAlert] = useState({variant:'',text:''})
    const context = useContext(AuthContext)
    const redirect = useNavigate()
    const styles = {
        link: {
            'textDecoration': 'none'
        }
    }
    async function submitHandler(data) {
        try {
            const responseUser = await authUser(data.email, data.password);
            if (responseUser?.user?.uid) {
                const user = await getUserById(responseUser.user.uid)
                context.logIn(user.docs[0].data())
                redirect("/")
            }
        } catch (e) {
            setAlert({variant:'danger', text:e.message})
        }
    }

    return(
    <main>        
        <div className='d-flex justify-content-center align-items-center'>
            <Form className="rounded p-4 p-sm-3" action="POST" onSubmit={handleSubmit(submitHandler)}>
            <h2>Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" {...register("email", { required: true })}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" {...register("password", { required: true })}/>
                <Form.Text className="text-muted">
                <Link style={styles.link} to={"/signup"}>I am new</Link> 
                </Form.Text>
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

export default Login;