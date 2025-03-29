import "./results.sass";
import cardImg1 from "../../assets/raio.png";
import cardImg2 from "../../assets/personalizacao.png";
import cardImg3 from "../../assets/resolucao.png";
import cardImg4 from "../../assets/suporte.png";

const Services = () => {
  return (
    <section className="results-container container" id="services">
      <div className="section-title-position">
        <h2 className="section-title">POR QUE NOS ESCOLHER?</h2>
        <p className="section-subtitle">
          CONHEÇA MAIS SOBRE OS SERVIÇOS DE NOSSA AGÊNCIA
        </p>
      </div>
      <div className="cards-results grid">
        {/* card 1 */}
        <div className="card-results">
          <div className="results-img">
            <img src={cardImg1} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Sites Responsivos</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Desenvolvimento do seu site de forma 100% adaptável para todas as
              e seguindo as regras do Google para uma melhor otimização e
              desempenho.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card-results">
          <div className="results-img">
            <img className="icon-services" src={cardImg2} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Apoio Tecnológico</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Desenvolvimento do seu site de forma 100% adaptável para todas as
              e seguindo as regras do Google para uma melhor otimização e
              desempenho.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card-results">
          <div className="results-img">
            <img className="icon-services" src={cardImg3} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Chatbots</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Desenvolvimento do seu site de forma 100% adaptável para todas as
              e seguindo as regras do Google para uma melhor otimização e
              desempenho.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className="card-results">
          <div className="results-img">
            <img className="icon-services" src={cardImg4} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Branding</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Desenvolvimento do seu site de forma 100% adaptável para todas as
              e seguindo as regras do Google para uma melhor otimização e
              desempenho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
