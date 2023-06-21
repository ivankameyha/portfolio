import "../assets/styles/works.css";
import taskApp from "../assets/images/taskapp.png";

export const Works = () => {
  return (
    <div className="works-container">
      <h1>Proyectos</h1>
      <section className="all-projects">
        <div className="card-container">
          <div className="card-content">
            <img src={taskApp} alt="" width="350px" />
            <button>Deploy</button>
            <button>Ver repositorio</button>
          </div>
          <h3>Anotador de tareas</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={taskApp} alt="" width="350px" />
            <button>Deploy</button>
            <button>Ver repositorio</button>
          </div>
          <h3>Anotador de tareas</h3>
        </div>
        <div className="card-container">
          <div className="card-content">
            <img src={taskApp} alt="" width="350px" />
            <button>Deploy</button>
            <button>Ver repositorio</button>
          </div>
          <h3>Anotador de tareas</h3>
        </div>
      </section>
    </div>
  );
};
