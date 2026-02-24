import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post("https://backend.jotish.in/backend_dev/gettabledata.php", {
        username: "test",
        password: "123456",
      })
      .then((res) => {
        console.log("API Response:", res.data);

        
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else if (Array.isArray(res.data.data)) {
          setData(res.data.data);
        } else if (Array.isArray(res.data.result)) {
          setData(res.data.result);
        } else {
          console.error("Unexpected API format:", res.data);
          setData([]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Employee List</h2>

      <button onClick={() => navigate("/chart")}>
        View Bar Chart
      </button>

      <button onClick={() => navigate("/map")}>
        View Map
      </button>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  navigate(`/details/${index}`, { state: item })
                }
              >
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.city}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;