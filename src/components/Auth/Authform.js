import { useState, useRef, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import AuthContext from "./auth-context";
import { useHistory } from "react-router-dom";
import classes from './Authform.module.css'
const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
 const history=useHistory()
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCCgLHDKOiOoUSLmo0OBya08WkAo1ms5M";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCCgLHDKOiOoUSLmo0OBya08WkAo1ms5M";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        history.push('/store')
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Container>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" required ref={emailInputRef} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" ref={passwordInputRef} required />
        </Form.Group>
        <Row>
          {!isLoading ? (
            <Col>
              <Button variant="primary" type="submit">
                {isLogin ? "Login" : "Create Account"}
              </Button>
            </Col>
          ) : (
            <p>Sending request...</p>
          )}
          <Col>
            <Button
              variant="secondary"
              type="button"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default AuthForm;