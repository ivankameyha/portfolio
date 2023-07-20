import "../assets/styles/home.css";
import avatar1 from "../assets/images/avatar1.jpg";
import coffee from "../assets/images/coffee.jpg";
import business from "../assets/images/business.jpg";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (param) => {
    navigate("/" + param);
  };

  const handleNavigateLink = () => {
    window.open("https://www.linkedin.com/in/ivan-kameyha/", "_blank");
  };

  return (
    <div className="home-container">
      <section className="home-header">
        <div className="card-style-one">
          <img className="img-profile" src={avatar1} alt="" />
          <header className="profile">
            <h4>A Software Developer</h4>
            <h1>Iván Kameyha</h1>
            <p>Hey there! This is my personal portfolio.</p>
          </header>
        </div>
        <div className="cards">
          <div className="card-style-two">
            <p className="typewriter-text">
              Si se puede <span style={{ color: "white" }}>imaginar,</span> se
              puede <span>programar.</span>
            </p>
          </div>
          <div className="cards-content">
            <div
              className="card-style-three"
              onClick={() => handleNavigate("about")}
            >
              <img src={coffee} alt="" />
              <h5>More about me</h5>
              <h3>Experiencia</h3>
              <Link to="/about">
                <button>
                  <i className="fa-solid fa-circle-nodes"></i>
                </button>
              </Link>
            </div>
            <div
              className="card-style-three"
              onClick={() => handleNavigate("works")}
            >
              <img src={business} alt="" />
              <h5>Showcase</h5>
              <h3>Proyectos</h3>
              <Link to="/works">
                <button>
                  <i className="fa-solid fa-circle-nodes"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------------------- */}
      <section className="home-main">
        <main className="more-cards">
          <div className="row-one">
            <div
              className="card-style-three"
              onClick={handleNavigateLink}
            >
              <p>
                <i class="fa-brands fa-linkedin"></i>
              </p>
              <h5>More information</h5>
              <h3>Linkedin</h3>
              <Link
                to="https://www.linkedin.com/in/ivan-kameyha/"
                target="_blank"
              >
                <button>
                  <i className="fa-solid fa-circle-nodes"></i>
                </button>
              </Link>
            </div>
            <div
              className="card-style-three"
              onClick={() => handleNavigate("about")}
            >
              <ul>
                <li>
                  <i class="fa-solid fa-laptop"></i>
                </li>
                <li>
                  <i class="fa-regular fa-folder-open"></i>
                </li>
                <li>
                  <i class="fa-solid fa-file-code"></i>
                </li>
                <li>
                  <i class="fa-solid fa-database"></i>
                </li>
                <li>
                  <i class="fa-solid fa-chart-pie"></i>
                </li>
              </ul>
              <h5>Specialization</h5>
              <h3>Lenguajes que utilizo</h3>
              <Link to="/about">
                <button>
                  <i className="fa-solid fa-circle-nodes"></i>
                </button>
              </Link>
            </div>
            <div
              className="card-style-three"
              onClick={() => handleNavigate("contact")}
            >
              <section className="icons-profiles">
                <label>
                  <i class="fa-brands fa-square-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                </label>
                <br />
                <label>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-github"></i>
                </label>
              </section>
              <h5>More information</h5>
              <h3>Perfiles</h3>
              <Link to="/contact">
                <button>
                  <i className="fa-solid fa-circle-nodes"></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="row-two">
            <div className="card-style-three">
              <h1>¡Siempre estoy dispuesto a charlar!</h1>
              <h4>
                Me pueden contactar en{" "}
                <a href="mailto:iv.kameyha@gmail.com">iv.kameyha@gmail.com</a> o
                avíseme en redes sociales.
              </h4>
            </div>
            <div
              className="card-style-three"
              onClick={() => handleNavigate("contact")}
            >
              <h1>
                Let's <br /> work <span>together.</span>
              </h1>
              <Link to="/contact">
                <button>
                  <i className="fa-solid fa-circle-nodes"></i>
                </button>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};
