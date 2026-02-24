import { useLocation, useNavigate } from "react-router-dom";

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {data.name}</p>
      <p>Salary: {data.salary}</p>
      <p>City: {data.city}</p>

      <button onClick={() => navigate("/photo")}>
        Capture Photo
      </button>
    </div>
  );
}

export default Details;