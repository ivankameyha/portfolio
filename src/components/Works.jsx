import "../assets/styles/works.css";
import taskApp from "../assets/images/taskapp.png";
import udyat from "../assets/images/udyat.jpeg";
import cinePlus from "../assets/images/cineplus.jpeg"
import generatorPassword from "../assets/images/generatorpassword.jpeg"

export const Works = () => {
  return (
    <div className="works-container">
      <h1>Proyectos</h1>
      <section className="all-projects">
        <div className="card-container">
          <div className="card-content">
            <img src={taskApp} alt="" width="350px" />
            <a href="https://ivan-kameyha.github.io/react-task-example/" target="_blank"><button>Deploy</button></a>
            <a href="https://github.com/Ivan-Kameyha/react-task-example" target="_blank"><button>Ver repositorio</button></a>
          </div>
          <h3>Planificador semanal</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={udyat} alt="" width="350px" />
            <a href="https://drive.google.com/file/d/12s22Y6DUt42EXUpO4GpcVCmWPEaMuNzP/view?usp=sharing" target="_blank"><button>Deploy</button></a>
            <a href="https://github.com/Ivan-Kameyha/keyboard-project" target="_blank"><button>Ver repositorio</button></a>
            <p>Colaboración: <a href="https://github.com/NunezHoracio" target="_blank">Horacio Nuñez</a></p>
          </div>
          <h3>Plataforma inclusiva</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={cinePlus} alt="" width="350px" />
            <a href="https://drive.google.com/drive/folders/1sp8mGVbuxLpMh8Q2fLgXhxku202egXsf?usp=sharing" target="_blank"><button>Deploy</button></a>
            <a href="https://github.com/Ivan-Kameyha/Film-Project" target="_blank"><button>Ver repositorio</button></a>
          </div>
          <h3>Cartelera de cine</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={generatorPassword} alt="" width="350px" />
            <a href="https://drive.google.com/file/d/10JQhBUxzplqMtfyNO4KBEBi_OQzgskbQ/view?usp=sharing" target="_blank"><button>Deploy</button></a>
            <a href="https://github.com/Ivan-Kameyha/password-generate" target="_blank"><button>Ver repositorio</button></a>
          </div>
          <h3>Generador de contraseñas</h3>
        </div>
      </section>
    </div>
  );
};
