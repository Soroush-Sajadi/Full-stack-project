import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setData(null);
    const res = await axios.get("http://localhost:3000/");
    setData(res);
  };

  return (
    <div>
      <h1>{data.map(item => item.date)}</h1>
    </div>
  );
}
export default Comments;