import "./results.sass";
import cardImg1 from "../../assets/metas.png";
import cardImg2 from "../../assets/detalhes.png";
import cardImg3 from "../../assets/parceria.png";
import cardImg4 from "../../assets/grafico.png";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <section ref={ref} className="results-container container" id="results">
        <div className="section-title-position">
          <h2 className="section-title">POR QUE ESCOLHER NOSSA AGÊNCIA?</h2>
          <p className="section-subtitle">
            MAIS DO QUE SERVIÇOS, ENTREGAMOS VALOR, ESTRATÉGIAS E RESULTADOS
            CONSISTENTES PARA MARCAS QUE BUSCAM SE DESTACAR.
          </p>
        </div>
        <div className="cards-results grid">
          {/* card 1 */}
          <div className="card-results">
            <div className="results-img">
              <img src={cardImg1} alt="profile" />
            </div>
            <div className="card-results-title">
              <span className="card-title-results">
                Estratégia com Propósito
              </span>
            </div>
            <div className="card-results-description">
              <p className="card-description">
                Cada projeto nasce de um plano inteligente e sob medida, porque
                sua marca merece mais do que soluções genéricas.
              </p>
            </div>
          </div>
          {/* card 2 */}
          <div className="card-results">
            <div className="results-img">
              <img className="icon-services" src={cardImg2} alt="profile" />
            </div>
            <div className="card-results-title">
              <span className="card-title-results">
                Excelência em Cada Detalhe
              </span>
            </div>
            <div className="card-results-description">
              <p className="card-description">
                Da estética ao desempenho, cuidamos de cada elemento com rigor e
                sofisticação para refletir o padrão da sua marca.
              </p>
            </div>
          </div>
          {/* card 3 */}
          <div className="card-results">
            <div className="results-img">
              <img className="icon-services" src={cardImg3} alt="profile" />
            </div>
            <div className="card-results-title">
              <span className="card-title-results">Parceria de Verdade</span>
            </div>
            <div className="card-results-description">
              <p className="card-description">
                Trabalhamos lado a lado com você, com transparência, agilidade e
                foco em resultados. Seu sucesso é o nosso compromisso.
              </p>
            </div>
          </div>
          {/* card 4 */}
          <div className="card-results">
            <div className="results-img">
              <img className="icon-services" src={cardImg4} alt="profile" />
            </div>
            <div className="card-results-title">
              <span className="card-title-results">
                Inovação que Gera Resultados
              </span>
            </div>
            <div className="card-results-description">
              <p className="card-description">
                Aplicamos as melhores tecnologias e tendências para entregar
                soluções que não apenas impressionam, mas convertem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
