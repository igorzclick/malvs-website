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
                    <h3 className="agency-title">Quem Somos</h3>
                    <p className="agency-description">
                        
                    </p>
                </div>
                <div className="agency-card">
                    <i className='bx bx-award agency-icon'></i>
                    <h3 className="agency-title">Missão</h3>
                    <p className="agency-description">
                        Nossa missão é ajudar empresas a crescerem no mundo digital, através de estratégias inovadoras e personalizadas.
                    </p>
                </div>

        </div>  
      </div>
    </div>

  )
}

export default Agency


