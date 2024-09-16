import React, { useState } from "react";

const Form = () => {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const handleChange = (e) => {
  //   setName(e.target.value);
  //   console.log("e", e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log("e", e.target.value);
  // };
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submit = () => {
    console.log(formData);
    setFormData({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form action=""></form>
      <input
        type="text"
        value={formData.name}
        name="name"
        onChange={handleSubmit}
      />
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleSubmit}
        style={{ marginTop: 10 }}
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleSubmit}
        style={{ marginTop: 10 }}
      />
      <br />
      <input type="submit" onClick={submit} style={{ marginTop: 10 }} />
    </div>
  );
};

export default Form;
