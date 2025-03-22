import './services.sass';

const Services = () => {
  return (
   <section className="services-container container">
             <div className="section-title-position">
                 <h2 className="section-title">NOSSOS SERVIÇOS</h2>
                 <p className="section-subtitle">CONHEÇA MAIS SOBRE OS SERVIÇOS DE NOSSA AGÊNCIA</p>
             </div>
             <div className="cards-services grid">
              {/* card 1 */}
              <div className="card-services">
                  <div className="services-img">
                      <img className="icon-services" alt="profile" />
                  </div>
                  <div className="card-services-title">
                        <span className="card-title">
                            Desenvolvimento de Sites
                        </span>
                  </div>
                  <div className="card-services-description">
                    <p className="card-description">
                        Desenvolvimento do seu site de forma 100% adaptável para todas as 
                        e seguindo as regras do Google para uma melhor otimização e desemepn
                    </p>
                  </div>
              </div>
              
             </div>
             
       </section>
  )
}

export default Services