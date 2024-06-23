import '../index.css'

import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function Error_404(props) {
    return (
    <>
    <Header />
    <main>
        <section className="error-content">
          <h2>Ooops !</h2>
          <p className="subtitle">{props.msg}</p>
        </section>
    </main>
    <Footer />
    </>)
}