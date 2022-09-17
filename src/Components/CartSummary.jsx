//TODO

export default function CartSummary(){
    return(
        <section className="summary-container">
            <div className="summary">
                <div>
                    <span>Total</span>
                    <span>$1000</span>
                </div>
            </div>
            <div className="checkout">
                <button className="btn btn-success">Buy</button>
            </div>
        </section>
    )
}