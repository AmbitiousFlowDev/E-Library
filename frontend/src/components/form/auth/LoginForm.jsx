import {CiUser} from "react-icons/ci";
import {MdOutlinePassword} from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import authenticateUser from "../../../features/auth/actions/authenticateUser.js";
import useAuth from "../../../hooks/useAuth.jsx";
import Input from "../Input.jsx";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
    error === null ? navigate('/') : null;
  };

  return (
      <form className="card bg-base-100 w-[34rem] h-[22rem] shadow-lg font-[poppins]" onSubmit={handleSubmit}>
        <div className="card-body flex flex-col justify-center">
          <h2 className="card-title text-4xl flex justify-center text-center mb-4">Sign In</h2>
          <label className="input input-lg w-full">
            <CiUser />
            <Input type={"text"} name={"username"} value={credentials.username}
                onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                className={"grow w-full not-valid:ring-error"} placeHolder={"Username"}/>
          </label>
          <label className="input  input-lg w-full">
            <MdOutlinePassword />
            <Input type={"password"} name={"password"} value={credentials.password}
                onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                className={"grow w-full not-valid:outline-error"} placeHolder={"Password"}/>
          </label>
          {error && <p className="text-red-500 text-sm text-center">Authentication Error : Invalid credentials</p>}
          <div className="card-actions flex mt-4 justify-center">
            <button className="btn btn-primary w-full " disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <span>
            New to the platform? <Link to="/register" className={"font-bold text-success"}>Sign Up</Link>
          </span>
          </div>
        </div>
      </form>
  );
}
