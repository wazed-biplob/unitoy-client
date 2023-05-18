import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toyData, setToyData] = useState([]);
  const url = `http://localhost:5000/toydata?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((d) => {
        console.log(d);
      });
  }, [url]);
  return <div></div>;
};

export default MyToys;
