import '../index.css'

export default function AccountBalance(props) {

    return (
    <>
    <section className="account" key={props.title}>
        <div className="account-content-wrapper">
            <h3 className="account-title">{props.title}</h3>
            <p className="account-amount">${props.amount}</p>
            <p className="account-amount-description">{props.description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
    </>
)
}