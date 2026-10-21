import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main">
      <section className="intro">
        <div className="intro__content">
          <span className="intro__subtitle">DESCUBRA O MUNDO</span>

          <h2 className="intro__title">
            O mundo inteiro ao alcance de um clique.
          </h2>

          <p className="intro__description">
            Explore países de diferentes continentes, descubra suas capitais,
            populações e bandeiras. Uma maneira simples e interativa de conhecer
            melhor o nosso planeta.
          </p>

          <Link className="intro__button" to="/explore">
            Começar a explorar
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
