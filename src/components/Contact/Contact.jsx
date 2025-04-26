
import emailjs from "@emailjs/browser";
import "./contact.sass";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const Contact = () => {
  {
    /*emailjs*/
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hupuskz", "template_dyxqmba", form.current, {
        publicKey: "leXjDlMzOyteL7TuA",
      })
      e.target.reset()
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


  // animation scroll
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
      <section ref={ref} className="contact-container" id="contact">
        <h2 className="section-title">CONTATO</h2>
        <p className="section-subtitle">
          ALGUMA DÚVIDA? ENTRE EM CONTATO CONOSCO!
        </p>
        <div className="contact-container container grid">
          <div className="contact-content">
            <h3 className="contact-title">Entre em Contato</h3>
            {/*left cards*/}
            <div className="contact-info">
              {/*card 1*/}
              <div className="contact-card">
                <i className="bx bx-mail-send contact-icon"></i>

                <h3 className="contact-card-title">Email</h3>
                <span className="contact-card-data">
                  malvsagenciadigital@gmail.com
                </span>
                <a
                  href="mailto:malvsagenciadigital@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-button"
                >
                  Escreva-me{" "}
                  <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
              </div>
              {/*card 2*/}
              <div className="contact-card">
                <i className="bx bxl-whatsapp contact-icon"></i>

                <h3 className="contact-card-title">WhatsApp</h3>
                <span className="contact-card-data">+55 11 91603-3154</span>
                <a
                  href="https://wa.me/5511916033154?text=Oi%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Malv's%20Ag%C3%AAncia%20Digital."
                  rel="noreferrer"
                  target="_blank"
                  className="contact-button"
                >
                  Escreva-me{" "}
                  <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
              </div>
              {/*card 3*/}
              <div className="contact-card">
                <i className="bx bxl-linkedin contact-icon"></i>

                <h3 className="contact-card-title">LinkedIn</h3>
                <span className="contact-card-data">
                  Malv's Agência Digital
                </span>
                <a
                  href="https://www.linkedin.com/company/malvs-ag%C3%AAncia-digital/about"
                  rel="noreferrer"
                  target="_blank"
                  className="contact-button"
                >
                  Escreva-me{" "}
                  <i className="bx bx-right-arrow-alt contact-button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-content">
            <h3 className="contact-title">Escrever mensagem.</h3>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              {/*input 1*/}
              <div className="contact-form-div">
                <label className="contact-form-tag">Nome</label>
                <input
                  type="text"
                  name="name"
                  className="contact-form-input"
                  placeholder="Insira seu nome"
                />
              </div>
              {/*input 2*/}
              <div className="contact-form-div">
                <label className="contact-form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact-form-input"
                  placeholder="Insira seu email"
                />
              </div>
              {/*input 3*/}
              <div className="contact-form-div contact-form-area">
                <label className="contact-form-tag">Mensagem</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact-form-input"
                  placeholder="Escreva sua mensagem"
                ></textarea>
              </div>

              <button
                className="button-contact"
                value="Send"
                onClick={() => alert("Mensagem enviada!")}
              >
                <p>Enviar Mensagem</p>
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
