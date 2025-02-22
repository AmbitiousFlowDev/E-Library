import {CiUser} from "react-icons/ci";
import {MdOutlinePassword} from "react-icons/md";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import authenticateUser from "../../features/auth/actions/authenticateUser.js";
import useAuth from "../../hooks/useAuth.jsx";

export default function LoginForm() {
  const { login , token } = useAuth();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
      <form className="card bg-base-100 w-[28rem] shadow-sm font-[poppins]" onSubmit={handleSubmit}>
        <div className="card-body flex flex-col justify-center">
          <h2 className="card-title text-2xl flex justify-center text-center">Sign In</h2>

          <label className="input w-full">
            <CiUser />
            <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={(e) => setCredentials((prev) => ({ ...prev, username: e.target.value }))}
                className="grow w-full"
                placeholder="Username"
            />
          </label>

          <label className="input w-full">
            <MdOutlinePassword />
            <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
                className="grow"
                placeholder="Password"
            />
          </label>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="card-actions flex mt-4 justify-center">
            <button className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <span>
            New to the platform? <Link to="/register" className="font-bold">Sign Up</Link>
          </span>
          </div>
        </div>
      </form>
  );
}
