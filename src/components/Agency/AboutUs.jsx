import "./aboutUs.sass";
import Card from './CardBeto'
import Card2 from './CardIgor'

const AboutUs = () => {
  return (
    <section className="about-container container">
      <div className="cards-about grid">
        <div className="about-left-section">
          <div className="section-title-position">
            <h2 className="about-title">NOSSA EQUIPE</h2>
            <p className="about-subtitle">SAIBA MAIS SOBRE NÓS!</p>
            <p className="about-description">
              Descubra a excepcional equipe que compõe a nossa empresa, formada
              por profissionais apaixonados e especializados em diversas áreas.
              Cada membro traz consigo uma vasta experiência e um compromisso
              incansável com a excelência. Estamos prontos para colaborar,
              inovar e transformar suas ideias em realidade. Conheça mais sobre
              os talentos que impulsionam o sucesso dos nossos projetos.
            </p>
          </div>
        </div>
        <Card />
        <Card2 />
      </div>
    </section>
  );
};

export default AboutUs;
