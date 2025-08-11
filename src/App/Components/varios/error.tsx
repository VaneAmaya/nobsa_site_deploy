import { useNavigate } from "react-router-dom";

export const Error = () => {
    const regresar = useNavigate();
  return (
    <div className="d-flex justify-content-center mt-5" style={{marginBottom: "15%"}}>
      <div className="col-md-6 mt-5 text-center rounded-3 text-bg-danger">
        <span className="display-1"> Error 404</span>
        <div>
          <p>Recurso no encontrado</p>
        </div>
        <button onClick={() => {regresar(-1)}} className="btn btn-outline-info mb-3">Regresar</button>
      </div>
    </div>
  );
};