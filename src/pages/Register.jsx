import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { auth, googleProvider } from "../config/firebase.js";
import {
  signOut,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { IoLogoGoogle } from "react-icons/io5";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    // e.preventDefault();
    // const auth = getAuth();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const googleSignIn = () => {};
  return (
    <div>
      <NavBar />
      <h1 className="flex justify-center font-semibold text-3xl">SIGN UP</h1>
      <div>
        <form
          className="flex flex-col p-4 items-center "
          // onSubmit={handleSubmit}
        >
          {/* <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400"
            onChange={handleChange}
            name="fName"
            value={formData.fName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400 my-4"
            onChange={handleChange}
            name="lName"
            value={formData.lName}
          /> */}
          <input
            type="text"
            placeholder="E-mail"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 outline-gray-400"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 px-3 py-2 sm:w-1/2 w-3/4 my-3 outline-gray-400"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />
          {/* <textarea
            name="comment"
            id=""
            cols="55"
            rows="10"
            value={formData.comment}
            onChange={handleChange}
          /> */}
          <input
            type="checkbox"
            id="rememberMe"
            checked={formData.rememberMe}
            name="rememberMe"
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
          {/* 
          <fieldset>
            <legend>Current Employment Status</legend>

            <input
              type="radio"
              id="student"
              name="employment"
              value="STudent"
              onChange={handleChange}
              checked={formData.employment === "STudent"}
            />
            <label htmlFor="student">Student</label>
            <br />
            <input
              type="radio"
              id="full-time"
              name="employment"
              value="full-time"
              onChange={handleChange}
              checked={formData.employment === "full-time"}
            />
            <label htmlFor="full-time">full-time</label>
            <br />
            <input
              type="radio"
              id="part-time"
              name="employment"
              value="part-time"
              onChange={handleChange}
              checked={formData.employment === "part-time"}
            />
            <label htmlFor="part-time">part-time</label>
          </fieldset> */}
          {/* <label htmlFor="favColor">What's your fav colr?</label>
          <select
            name="favColor"
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
          >
            <option value="">--Choose--</option>
            <option value="red">Red</option>
            <option value="yellow">yellow</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
          <br /> */}
          {/* <a href="">Forgot Password?</a> */}{" "}
          <button
            // type="submit"
            className="bg-gray-800 text-white p-1 rounded-sm w-3/4 sm:w-1/2 py-2"
            onClick={handleSubmit}
          >
            REGISTER
          </button>{" "}
        </form>

        <button
          className="bg-red-500 text-white px-1 w-3/4 sm:w-1/2 py-1 flex justify-center mt-2"
          onClick={googleSignIn}
        >
          <IoLogoGoogle className="text-3xl" />{" "}
          <p className="text-lg pl-1"> Google</p>
        </button>
        <p className="text-center">
          Already registered?{" "}
          <a href="/login" className="underline">
            Sign In
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
