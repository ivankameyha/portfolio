import "../assets/styles/about.css";
import avatar2 from "../assets/images/avatar2.jpg";

export const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <div className="about-me">
          <h2>Iván Kameyha &#x1F4BB;</h2>
          <div className="card-style-three">
            <i class="fa-solid fa-code"></i>
            <p>
              Soy Técnico Universitario en programación, actualmente tengo 21 años de edad. Me
              he especializado en el área de desarrollo web y desarrollo de
              aplicaciones de escritorio.
            </p>
          </div>
        </div>
        <div className="card-style-one">
          <img className="img-profile" src={avatar2} alt="" />
        </div>
      </section>
      <section className="about-info">
        <div className="card-languages">
          <h4>Herramientas y lenguajes que utilizo</h4>
          <div class="column-wrapper">
            <div class="column">
              <i class="fa-brands fa-square-js"></i>
              JavaScript
            </div>
            <div class="column">
              <i class="fa-brands fa-react"></i>
              React
            </div>
            <div class="column">
              <i class="fa-brands fa-git-alt"></i>
              Git
            </div>
            <div class="column">
              <i class="fa-solid fa-database"></i>
              SQL
            </div>
            <div class="column">
              <i className="csharp">
                <b>C#</b>
              </i>
              CSharp
            </div>
            <div class="column">
              <i class="fa-brands fa-bootstrap"></i>
              Bootstrap
            </div>
          </div>
        </div>
        <div className="card-style-three">
          <h1>Educación</h1>
          <h5>2021-2023 || Universidad Tecnológica Nacional - FRT <br /><span style={{color: 'white'}}>Tecnicatura Universitaria en Programación</span></h5>
          <h5>2022-2023 || Argentina programa <br /><span style={{color: 'white'}}>Curso: desarrollo web full stack</span></h5>
        </div>
      </section>
    </div>
  );
};
