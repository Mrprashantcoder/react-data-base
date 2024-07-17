import React, { useEffect, useState } from "react";

const App = () => {
  const [form, setform] = useState({});
  const [user, setUsers] = useState([]);

  const handleForm = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handleSub = async (e) => {
    e.preventDefault();

    const resopnse = await fetch("http://localhost:8080/main", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
      
    });
    const data = await resopnse.json();
   
  };
 
  const getUsers = async () => {
    const resopnse = await fetch("http://localhost:8080/main", {
      method: "GET",
    });
    const data = await resopnse.json();
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div>
        <form onSubmit={handleSub}>
          <label>Name</label>
          <input type="text" name="username" onChange={handleForm}></input>
          <label>Password</label>
          <input type="text" name="Password" onChange={handleForm}></input>
          <br />
          <input type="submit" />
        </form>
        <div>
          <ul>
           {
            user.map((items)=>
            {
                  return<li>{items.username}</li>
            })
           }
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;
