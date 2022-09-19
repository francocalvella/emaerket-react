import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import AuthContext from "../Context/AuthContext";
import CartContext from "../Context/CartContext";
import firebase from './../Config/firebase';
import { useContext } from 'react';




export function Menu(){
    const context = useContext(AuthContext)
    function signOut(){
        firebase.auth().signOut()
        context.logOut()
        alert("You have logged out")
    }
   return(
    <AuthContext.Consumer>
        {
            context => 
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>FalseMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to={"/"}>Home</Link>
                        <Link className="nav-link" to={"/about"}>About Us</Link>
                        <Link className="nav-link" to={"/products"}>Products</Link>
                        <Link className="nav-link" to={"/products/load"}>Sell</Link>
                        {
                            !context.isLogged && 
                            <>
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </>
                        }
                        {
                            context.isLogged && 
                            <Link className="nav-link" to={"/"} onClick={signOut}>Log Out</Link>
                        }
                    </Nav>
                    <Nav className="justify-content-end">
                        {
                            context.isLogged &&
                            <Nav.Link href="#">Logged as {context.userInfo.name}</Nav.Link>
                        }
                        <CartContext.Consumer>
                            {
                                context => 
                                <>
                                    <Nav.Link as={Link} to={"/cart"}>{context.cart.length} items</Nav.Link>
                                    <Nav.Link as={Link} to={"/cart"}><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                                </>
                            }
                        </CartContext.Consumer>
                    </Nav>
                </Container>
            </Navbar>

        }
    </AuthContext.Consumer>

      );
    }
