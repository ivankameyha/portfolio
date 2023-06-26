import "../assets/styles/works.css";
import taskApp from "../assets/images/taskapp.png";
import udyat from "../assets/images/udyat.jpeg";

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
          <h3>Anotador de tareas</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={udyat} alt="" width="350px" />
            <a href="https://drive.google.com/file/d/12s22Y6DUt42EXUpO4GpcVCmWPEaMuNzP/view?usp=sharing" target="_blank"><button>Deploy</button></a>
            <a href="https://github.com/Ivan-Kameyha/keyboard-project" target="_blank"><button>Ver repositorio</button></a>
          </div>
          <h3>Plataforma inclusiva</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={taskApp} alt="" width="350px" />
            <a href="#"><button>Deploy</button></a>
            <a href="#"><button>Ver repositorio</button></a>
          </div>
          <h3>Cartelera de cine</h3>
        </div>
      </section>
    </div>
  );
};
