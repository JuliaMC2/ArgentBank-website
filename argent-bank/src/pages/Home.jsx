import '../index.css'

import InfoCards from "../components/InfoCards.jsx"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

export default function Home() {
    return (
    <>
    <Header />
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <InfoCards />
      </section>
    </main>
    <Footer />
    </>)
}