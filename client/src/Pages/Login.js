import React from "react";
import { Form, Input, message } from "antd";
import "../styles/RegisterStyles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

import axios from "axios";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      //   window.location.reload();
      dispatch(hideLoading());
      {
        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          message.success("Login Successfully");
          console.log(res.data);

          navigate("/");
        } else {
          message.error(res.data.message);
          console.log(res.data.message);
        }
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went Wrong !");
    }
  };
  return (
    <>
      {/* <div className='form-container'>
                <Form layout='vertical' onFinish={onFinishHandler} className='card p-4'>
                    <h2 className='text-center'>Login</h2>
                    <Form.Item label="Email" name="email" >
                        <Input type='email' required></Input>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type='password' required></Input>
                    </Form.Item>
                    <NavLink to='/register'>Not a user ? Register here</NavLink><br />
                    <button className='btn btn-primary' type='submit'>Login</button>
                </Form>
            </div> */}

      <section className="form">
        <div className="container">
          <div className="login-page">
            <div className="row">
              <div className="col-lg-5">
                <img
                  src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.tulsakids.com/content/uploads/2021/11/k/z/gettyimages-1331464666-1024x683.jpg"
                  width={600}
                  className="image img-fluid"
                ></img>
              </div>
              <div className="col-lg-7 login-header">
                <div className="form-container">
                  <Form
                    layout="vertical"
                    onFinish={onFinishHandler}
                    className="card p-4"
                  >
                    <h2 className="text-center">Login</h2>
                    <Form.Item label="Email" name="email">
                      <Input type="email" required></Input>
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                      <Input type="password" required></Input>
                    </Form.Item>
                    <NavLink to="/register">Not a user ? Register here</NavLink>
                    <br />
                    <button className="btn btn-primary" type="submit">
                      Login
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
