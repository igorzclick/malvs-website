import "./project.sass";
import img1 from "../../assets/mb-500.png";
import img2 from "../../assets/gv-500.png";
import img3 from "../../assets/providentia-desk.png";
import img4 from "../../assets/rm-500.png";

const Project = () => {
  return (
    <section className="project-container" id="cases">
      <div className="section-title-position">
        <h2 className="section-title">NOSSOS PROJETOS</h2>
        <p className="section-subtitle">CONHEÇA MAIS SOBRE NOSSOS PROJETOS!</p>
      </div>
      <div className="cards-project grid">
        {/* card 1 */}
        <div className="card-project">
          <img src={img1} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">MB do Brasil</p>
            <p className="project-card-description">
              Ao ingressar no mercado de forma repentina e sem material concreto
              para apresentar aos seus clientes, a MB do Brasil nos procurou em
              busca de uma solução que à ajudasse a transmitir credibilidade e
              autoridade no mercado, alem de uma identidade unica e marcante.
              Apos um alinhamento detalhado com o proprietário e uma pesquisa
              meticulosa de mercado, em sua area de atuação, entregamos uma
              identidade visual moderna e impactante, que transmitiu tudo oque o
              proprietario buscava.
            </p>
            <div className="project-card-button">
              <a
                href="https://www.behance.net/gallery/174074669/Identidade-Visual-MB-do-Brasil"
                target="_blank"
                rel="noreferrer"
              >
               Saiba Mais &nbsp;
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card-project">
          <img src={img2} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">Grande Victoire</p>
            <p className="project-card-description">
              Ao entrar no mundo das vendas online, a Grande Victoire nos
              procurou em busca de uma solução que à ajudasse a expandir seus
              negócios, pois estava enfrentando dificuldades em suas vendas,
              pelas limitações de atuar somente com as redes sociais. Apos um
              alinhamento detalhado com a proprietaria, conseguimos entender
              suas necessidades e dores, e com isso criar uma loja virtual,
              moderna e responsiva.
            </p>
            <div className="project-card-button">
              <a
                href="https://www.instagram.com/grande_victoire/"
                target="_blank"
                rel="noreferrer"
              >
                Saiba Mais &nbsp;
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card-project">
          <img src={img3} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">Providentia Consultoria</p>
            <p className="project-card-description">
              Apos anos de atuação no mercado,a Providentia Consultoria nos
              procurou com o objetivo de realizar a criação de um site moderno e
              atrativo. O principal intuito do proprietario era transmitir
              credibilidade e autoridade no mercado, com isso ter uma relevancia
              nos motores de busca, impulsionando assim sua credibilidade.
            </p>
            <div className="project-card-button">
              <a
                href="https://providentiaconsultoria.com/"
                target="_blank"
                rel="noreferrer"
              >
                Saiba Mais &nbsp;
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="card-project">
          <img src={img4} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">Espaço Regina Monteiro</p>
            <p className="project-card-description">
              A proprietaria do Espaço Regina Monteiro nos procurou pois
              enfrentava serios problemas em suas redes sociais e na sua
              presença digital, onde não via engajamento e não transmitia
              autoridade em suas redes sociais. Ao fazer uma análise cuidadosa e
              meticulosa em suas redes sociais, conseguimos avaliar a melhor
              estrategia para sanar suas dores e dificuldades.
            </p>
            <div className="project-card-button">
              <a href="#" target="_blank" rel="noreferrer">
                Saiba Mais &nbsp;
                <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
