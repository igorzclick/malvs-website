import './agency.sass';
const Agency = () => {
  return (
    <div className='agency' id='agency'>
        <div className="agency-container container">
            <div className="agency-texts">
                <h2 className="section-title">   
                    NOSSA AGÊNCIA
                </h2>
                <p className="section-subtitle">
                DESCUBRA MAIS SOBRE NOSSA HISTÓRIA
                </p>
            </div>
           {/* cards */}
            <div className="agency-cards grid">
                <div className="agency-card">
                    <i className='bx bx-group agency-icon'></i>
                   
                </div>
                <div className="agency-card">
                    <i className='bx bx-award agency-icon'></i>
                    <h3 className="agency-title">Há mais de 5 anos inovando o digital</h3>
                    <p className="agency-description">
                    Nossa agência é especializada em marketing para<br>
                    </br> empresas e órgãos públicos, unindo dados, criatividade e<br>
                    </br> experiência para resultados consistentes. Oferecemos<br>
                    </br> planejamento de campanhas publicitárias,publicidade<br>
                    </br>  institucional e governamental, além de estratégias de<br>
                    </br> marketing digital, como tráfego pago, inbound marketing e criação de sites e landing pages otimizados. 
                    </p>
                    
                     
                </div>

        </div>  
      </div>
    </div>

  )
}

export default Agency


