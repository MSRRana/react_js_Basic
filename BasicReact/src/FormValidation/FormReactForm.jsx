import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
const FormReactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const password = watch("password");
  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Inputs">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>
        <div className="Inputs">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is Invalid",
              },
            })}
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>
        <div className="Inputs">
          <label className="label">Age:</label>
          <input
            type="number"
            name="age"
            {...register("age", { required: "Age is required" })}
          />
          {errors.age && <div className="error">{errors.age.message}</div>}
        </div>
        <div className="Inputs">
          <label className="label">password:</label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be 6 characters" },
            })}
          />
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
        </div>
        <div className="Inputs">
          <label className="label">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Confirm Password  must be 6 characters",
              },
              validate: (value) =>
                value === password || "Password do not match",
            })}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword.message}</div>
          )}
        </div>
        <div className="Inputs">
          <label className="label">Gender:</label>
          <select
            name="gender"
            {...register("gender", { required: "Gender is required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <div className="error">{errors.gender.message}</div>
          )}
        </div>
        <div className="Inputs">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormReactForm;
