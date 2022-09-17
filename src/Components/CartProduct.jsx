import { Link } from "react-router-dom";
//TODO

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

            <div className="col right ">
                <div className="btn btn-danger m-1 remove">Remove</div>
                <div className="btn btn-danger m-1 remove">Remove All</div>
                <div className="info quantity m-1">2</div>
                <div className="info total-price m-1">1000$</div>
            </div>
        </li>
    );
}