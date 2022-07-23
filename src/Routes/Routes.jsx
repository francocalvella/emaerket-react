import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from './../Components/Menu';
import { Main } from "../Pages/Main";
import Login from './../Pages/Login';
import NotFound from './../Pages/NotFound';
import Signup from './../Pages/Signup';
import LoadProduct from './../Pages/Products/LoadProduct';
import { Products } from './../Pages/Products/Products';
import { ReadProduct } from './../Pages/Products/ReadProduct';
import { EditProduct } from './../Pages/Products/EditProduct';
import AuthProvider from './../Context/AuthProvider';
import AuthContext from './../Context/AuthContext';
import { About } from './../Pages/About';


export function AppRoutes(){
    return (
        <Router>
            <AuthProvider>
                <AuthContext.Consumer>
                    {
                        context=>
                        <>
                        <Menu/>
                        <Routes>
                            <Route path={"/"} element={<Main/>}/>
                            <Route path={"/about"} element={<About/>}/>
                            <Route path={"/login"} element={<Login/>}/>
                            <Route path={"/signup"} element={<Signup/>}/>
                            <Route path={"/products/load"} element={<LoadProduct/>}/>
                            <Route path={"/products"} element={<Products/>}/>
                            <Route path={"/products/:id"} element={<ReadProduct/>}/>
                            <Route path={"/products/:id/edit"} element={(context.isLogged && <EditProduct/>)||<Login/>}/>
                            <Route path={"*"} element={<NotFound/>}/>
                        </Routes>
                        </>
                    }
                </AuthContext.Consumer>
            </AuthProvider>
        </Router>
    )
}