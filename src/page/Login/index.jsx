import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postLoginAsync } from "../../redux/slices/loginSlice";
import "./style.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(postLoginAsync(values))
        .unwrap()
        .then(() => {
          navigate("/");
          window.location.reload();
        })
        .catch(() => {
          console.log("xeta cixdi");
        });
    },
  });

  const access = localStorage.getItem("access");

  const errorMsg = useSelector((state) => state.login.error);

  useEffect(() => {
    if (access != null) {
      navigate("/");
    }
  }, [navigate, access]);
  return (
    <div className="login">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="login-title">Giriş</h1>
        <input
          name="username"
          id="username"
          className="login-input"
          type="text"
          placeholder="istifadəçi adı"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <input
          name="password"
          id="password"
          className="login-input"
          type="password"
          placeholder="şifrə"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <button type="submit" className="login-button">
          Daxil ol
        </button>
        {errorMsg != null ? <div className="login-error">{errorMsg}</div> : ""}
      </form>
    </div>
  );
};

export default LoginPage;
