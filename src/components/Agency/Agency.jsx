import "./agency.sass";
import Counter from "./Counter";

const Agency = () => {
  return (
    <div className="agency" id="agency">
      <div className="agency-container container">
        <div className="agency-texts">
          <h2 className="section-title">NOSSA AGÊNCIA</h2>
          <p className="section-subtitle">DESCUBRA MAIS SOBRE NOSSA HISTÓRIA</p>
        </div>
        {/* cards */}
        <div className="agency-cards grid">
          <div className="agency-card"></div>
          <div className="agency-card">
            <h3 className="agency-title">
              Há mais de 5 anos inovando o digital
            </h3>
            <p className="agency-description">
              Nossa agência é especializada em marketing para empresas e órgãos
              públicos, unindo dados, criatividade e experiência para resultados
              consistentes. Oferecemos planejamento de campanhas
              publicitárias,publicidade institucional e governamental, além de
              estratégias de marketing digital, como tráfego pago, inbound
              marketing e criação de sites e landing pages otimizados.
            </p>
            <div className="counters">
        
              <Counter label="Clientes" className="clients" targetValue={100} />
             
              <Counter label="Leads" targetValue={5000} />
  
              <Counter label="Contratos" targetValue={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
