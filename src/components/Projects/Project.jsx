import './project.sass';

const Project = () => {
    return (
        <section className="project-container container">
            <div className="section-title-position">
                <h2 className="section-title">NOSSOS PROJETOS</h2>
                <p className="section-subtitle">CONHEÇA MAIS SOBRE NOSSOS PROJETOS!</p>
            </div>
            <div className="cards-project grid">
                {/* card 1 */}
                <div  className="card-project">
                    <div className="card-content-project">
                        <h2 className="card-title-project">Providentia Consultoria</h2>
                        <p className="card-body-project">
                        A Providentia Consultoria oferece serviços especializados em registro de marcas e patentes.
                        </p>
                       
                    </div>
                </div>
                {/* card 2 */}
                <div className="card-project">
                    <div className="card-content-project">
                        <h2 className="card-title-project">Espaço Regina Monteiro</h2>
                        <p className="card-body-project">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                            culpa.
                        </p>
                       
                    </div>
                </div>
            {/* card 3 */}  
            <div className="card-project">
                <div className="card-content-project">
                    <h2 className="card-title-project">MB do Brasil</h2>
                    <p className="card-body-project">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                        culpa.
                    </p>
                   
                </div>
            </div>
            {/* card 4 */}
            <div className="card-project">
                <div className="card-content-project">
                    <h2 className="card-title-project">Grand Victoire</h2>
                    <p className="card-body-project">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
                        culpa.
                    </p>
                    
                </div>
            </div>    
            
        </div>
    </section>
);}

export default Project;
