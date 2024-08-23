import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'wouter';
import * as LoginSignupStyles from "./LoginSignupStyles";
import './LoginSignup.css';

function Login() {
  const [signIn, toggle] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [, setLocation] = useLocation();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log(res.data);
      setLocation(`/profile`);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Signup failed: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/signin', {
        email: formData.email,
        password: formData.password,
      });
      console.log('JWT Token:', res.data.token);
      setLocation(`/profile`);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Login failed: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="login-signup">
      <LoginSignupStyles.Container>
        <LoginSignupStyles.SignUpContainer $signingIn={signIn}>
          <LoginSignupStyles.Form onSubmit={handleSignup}>
            <LoginSignupStyles.Title>Create Account</LoginSignupStyles.Title>
            <LoginSignupStyles.Input
              type="text"
              name="name"
              placeholder="Name"
              required
              autoComplete="on"
              onChange={handleInputChange}
            />
            <LoginSignupStyles.Input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="on"
              onChange={handleInputChange}
            />
            <LoginSignupStyles.Input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            <LoginSignupStyles.Button type="submit">
              Sign Up
            </LoginSignupStyles.Button>
          </LoginSignupStyles.Form>
        </LoginSignupStyles.SignUpContainer>
        <LoginSignupStyles.SignInContainer $signingIn={signIn}>
          <LoginSignupStyles.Form onSubmit={handleSignin}>
            <LoginSignupStyles.Title>Sign in</LoginSignupStyles.Title>
            <LoginSignupStyles.Input
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="on"
              onChange={handleInputChange}
            />
            <LoginSignupStyles.Input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
              onChange={handleInputChange}
            />
            <LoginSignupStyles.Anchor href="#">Forgot your password?</LoginSignupStyles.Anchor>
            <LoginSignupStyles.Button type="submit">
              Sign In
            </LoginSignupStyles.Button>
          </LoginSignupStyles.Form>
        </LoginSignupStyles.SignInContainer>
        <LoginSignupStyles.OverlayContainer $signingIn={signIn}>
          <LoginSignupStyles.Overlay $signingIn={signIn}>
            <LoginSignupStyles.LeftOverlayPanel $signingIn={signIn}>
              <LoginSignupStyles.Title>Welcome Back!</LoginSignupStyles.Title>
              <LoginSignupStyles.Paragraph>
                To keep connected with us please login with your personal info
              </LoginSignupStyles.Paragraph>
              <LoginSignupStyles.GhostButton onClick={() => toggle(true)}>
                Sign In
              </LoginSignupStyles.GhostButton>
            </LoginSignupStyles.LeftOverlayPanel>
            <LoginSignupStyles.RightOverlayPanel $signingIn={signIn}>
              <LoginSignupStyles.Title>Hello, Friend!</LoginSignupStyles.Title>
              <LoginSignupStyles.Paragraph>
                Enter your personal details and start your journey with us
              </LoginSignupStyles.Paragraph>
              <LoginSignupStyles.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </LoginSignupStyles.GhostButton>
            </LoginSignupStyles.RightOverlayPanel>
          </LoginSignupStyles.Overlay>
        </LoginSignupStyles.OverlayContainer>
      </LoginSignupStyles.Container>
    </div>
  );
}

export default Login;
