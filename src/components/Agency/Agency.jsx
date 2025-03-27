import "./agency.sass";
import Counter from "./Counter";
import {register} from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import img1 from '../../assets/customer-pana.png';
import img2 from '../../assets/mobile-pana.png';
import img3 from '../../assets/ecommerce-pana.png';
import { Autoplay, Navigation } from 'swiper/modules';
import AboutUs from "./AboutUs";


const Agency = () => {
  const data = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 }
  ];
   
  return (
    <section className="agency-container container" id="agency">
        <div className="agency-texts">
          <h2 className="section-title agency-spacing">NOSSA AGÊNCIA</h2>
          <p className="section-subtitle">DESCUBRA MAIS SOBRE NOSSA HISTÓRIA</p>
        </div>
        {/* cards */}
        <div className="agency-cards grid">
          <div className="agency-card">{/* imagens */}
            <Swiper spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="Swiper"
            >
                {data.map((item) => (
                  <SwiperSlide className="swiper2" key={item.id}>
                    <img 
                    src={item.image} 
                    alt="Slider" 
                    className="slide-item"/>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          {/* card2 */}
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
      <AboutUs />
    </section>
  );
};

export default Agency;
