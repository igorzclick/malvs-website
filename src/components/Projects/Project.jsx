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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card-project">
          <img src={img2} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">Card Title</p>
            <p className="project-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card-project">
          <img src={img3} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">Card Title</p>
            <p className="project-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        {/* card 1 */}
        <div className="card-project">
          <img src={img4} alt="case image" />
          <div className="project-card-content">
            <p className="project-card-title">Card Title</p>
            <p className="project-card-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
