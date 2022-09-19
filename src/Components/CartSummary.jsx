
export default function CartSummary({cart}){
    return(
        <section className="summary-container">
            <div className="summary">
                <div>
                    <span>Total</span>
                    <span>${cart.reduce((acc, cur)=>acc + parseInt(cur.data().value), 0)}.00</span>
                </div>
            </div>
            <div className="checkout">
                <button className="btn btn-success">Buy</button>
            </div>
        </section>
    )
}