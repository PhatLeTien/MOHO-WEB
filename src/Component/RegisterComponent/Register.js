import React from 'react';
import '../RegisterComponent/RegisterStyle.css'; // Đảm bảo đường dẫn đúng đến file CSS cho phần giao diện đăng ký
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from "react-icons/fa"; // Bổ sung icon cho phần giao diện đăng ký

const Register = () => {
  return (
    <div className='register-container'>
      <div className='body-register'>
        <div className='wrapper'>
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <FaUser className='icon' />
            </div>

            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon' />
            </div>

            <div className="input-box">
              <input type="email" placeholder='Email' required />
              <FaEnvelope className='icon' />
            </div>

            <button type="submit">Register</button>

            <div className="login-link">
              <p>Already have an account? <a href="/login">Login</a></p>
            </div>
          </form>
          <div className="back-to-home-link">
            <FaArrowLeft className="icon" />
            <a href="/">Back To Home</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
