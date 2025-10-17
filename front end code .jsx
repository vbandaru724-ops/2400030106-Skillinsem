import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [d, setD] = useState([]);
  const [l, setL] = useState(true);
  const [e, setE] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setD(res.data);
        setL(false);
      })
      .catch(() => {
        setE("Failed to fetch data");
        setL(false);
      });
  }, []);

  if (l) return <p>Loading...</p>;
  if (e) return <p>{e}</p>;

  return (
    <ul>
      {d.map(u => (
        <li key={u.id}>
          {u.name} - {u.email} - {u.phone}
        </li>
      ))}
    </ul>
  );
}

export default UserList;

