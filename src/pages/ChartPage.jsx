import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";
import axios from "axios";

function ChartPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("https://backend.jotish.in/backend_dev/gettabledata.php", {
        username: "test",
        password: "123456",
      })
      .then((res) => {
        setData(res.data.slice(0, 10));
      });
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="salary" fill="#8884d8" />
    </BarChart>
  );
}

export default ChartPage;