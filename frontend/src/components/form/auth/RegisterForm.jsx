import { CiUser } from "react-icons/ci";
import { MdOutlinePassword , MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useState } from "react";
import useAuth from "../../../hooks/useAuth.jsx";
import Input from "../Input.jsx";

export default function RegisterForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    error === null ? navigate("/") : null;
  };

  return (
    <form
      className="card bg-base-100 w-[34rem] h-[22rem] shadow-lg font-[poppins] border-[#ccc] border-[0.6px]"
      onSubmit={handleSubmit}
    >
      <div className="card-body flex flex-col justify-center">
        <h2 className="card-title text-4xl flex justify-center text-center mb-4">
          Sign Up
        </h2>
        <label className="input input-lg w-full">
          <CiUser />
          <Input
            type={"text"}
            name={"username"}
            value={credentials.username}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, username: e.target.value }))
            }
            className={"grow w-full not-valid:ring-error"}
            placeHolder={"Username"}
          />
        </label>
        <label className="input  input-lg w-full">
          <MdOutlinePassword />
          <Input
            type={"password"}
            name={"password"}
            value={credentials.password}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
            className={"grow w-full not-valid:outline-error"}
            placeHolder={"Password"}
          />
        </label>
        <label className="input  input-lg w-full">
          <MdEmail />
          <Input
            type={"email"}
            name={"email"}
            value={credentials.email}
            onChange={(e) =>
              setCredentials((prev) => ({ ...prev, password: e.target.value }))
            }
            className={"grow w-full not-valid:outline-error"}
            placeHolder={"Email"}
          />
        </label>
        {error && (
          <p className="text-red-500 text-sm text-center">
            Authentication Error : Invalid credentials
          </p>
        )}
        <div className="card-actions flex mt-4 justify-center">
          <button className="btn btn-primary w-full " disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
          <span>
            Already a member ? {" "}
            <Link to="/login" className={"font-bold text-success"}>
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
}
