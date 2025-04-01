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
            <span className="card-title-results">Resultados Rápidos</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Estratégias que geram resultados rápidos e mensuráveis para o seu
              negócio. Aumente suas vendas e alcance novos clientes com nosso apoio.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card-results">
          <div className="results-img">
            <img className="icon-services" src={cardImg2} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Soluções Personalizadas</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Profissionais qualificados para atender suas necessidades específicas. Atuando
              em todas as áreas do marketing digital e desenvolvimento.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card-results">
          <div className="results-img">
            <img className="icon-services" src={cardImg3} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Soluções Responsivas</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
              Projetos otimizados para todos os dispositivos, garantindo uma experiência de usuário
              excepcional. Aumente a satisfação do cliente e reduza a taxa de rejeição com nosso suporte.
            </p>
          </div>
        </div>
        {/* card 4 */}
        <div className="card-results">
          <div className="results-img">
            <img className="icon-services" src={cardImg4} alt="profile" />
          </div>
          <div className="card-results-title">
            <span className="card-title-results">Suporte Contínuo</span>
          </div>
          <div className="card-results-description">
            <p className="card-description">
             Acompanhamento constante e suporte para garantir o sucesso do em todas as etapas do projeto, 
             mesmo após a entrega. Nossa equipe está sempre disponível para ajudar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
