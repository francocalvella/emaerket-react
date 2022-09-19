import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext"

export default function CartProduct(props){
    const product = props.data

    return (
        <li className="row">
            <div className="col left">
                <div className="thumbnail">
                    <a className="cart-img-container" href="#">
                        <img className="cart-img" src={product.img.url} alt={product.name} height={150}/>
                    </a>
                </div>
                <div className="detail">
                    <div className="name">
                        <Link className="nav-link link-dark" to={"/products/"+product.id}>{product.name.toUpperCase()}</Link>
                    </div>
                    <div className="description">{product.description}</div>
                    <div className="price">${product.value}</div>
                </div>
            </div>
            <CartContext.Consumer>
                {
                    context =>
                <div className="col right ">
                    <div className="btn btn-danger m-1 remove" onClick={()=>context.removeOne(product.id)}>Remove</div>
                    <div className="btn btn-danger m-1 remove" onClick={()=>{context.clear();console.log(context.cart)}}>Remove All</div>
                    <div className="info total-price m-1">${product.value}.00</div>
                </div>
                }
            </CartContext.Consumer>
        </li>
    );
}