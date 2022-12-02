/* /pages/login.js */

import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import { login } from '../components/auth'
import AppContext from '../components/context'
import { useUser, useUpdateUser } from '../components/context'

import { FacebookLoginButton } from 'react-social-login-buttons'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { AppleLoginButton } from 'react-social-login-buttons'
import registerStyle from '../styles/Register.module.css'
import Header from '../components/Header'

function Login(props) {
  const [data, updateData] = useState({ identifier: '', password: '' }) //identifier is the username or email
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const appContext = useContext(AppContext)
  const loggedIn = useUser()
  const toggleLogIn = useUpdateUser()

  // useEffect(() => {
  //   if (appContext.isAuthenticated) {
  //     router.push('/') // redirect if you're already logged in
  //   }
  // }, [])

  const loginSet = () => {}

  function onChange(event) {
    updateData({ ...data, [event.target.name]: event.target.value })
  }

  return (
    <Container>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <div className='paper'>
            <Header title={'Welcome back'} />
            <section className='p-3'>
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div
                      key={error.messages[0].id}
                      style={{ marginBottom: 10 }}
                    >
                      <small style={{ color: 'red' }}>
                        {error.messages[0].message}
                      </small>
                    </div>
                  )
                })}
              <FacebookLoginButton
                onClick={() => alert('Hello')}
                className='mb-3'
              ></FacebookLoginButton>
              <GoogleLoginButton
                onClick={() => alert('Hello')}
                className='mb-3'
              ></GoogleLoginButton>
              <AppleLoginButton
                onClick={() => alert('Hello')}
              ></AppleLoginButton>
              <div className={registerStyle.or}>or</div>
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name='identifier'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type='password'
                      name='password'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>

                  <FormGroup>
                    <span className='row justify-content-center mb-3 '>
                      <a href=''>
                        <small style={{ color: '#40312e' }}>
                          Forgot Password?
                        </small>
                      </a>
                    </span>
                    <Button
                      style={{ backgroundColor: '#40312e' }}
                      className='col-sm-12'
                      onClick={toggleLogIn}
                      // onClick={() => {
                      //   // setLoading(true)

                      //   login(data.identifier, data.password)
                      //     .then((res) => {
                      //       setLoading(false)

                      //       // set authed User in global context to update header/app state
                      //       appContext.setUser(res.data.user)
                      //     })
                      //     .catch((error) => {
                      //       //setError(error.response.data);
                      //       setLoading(false)
                      //     })
                      // }}
                    >
                      {loading ? 'Loading... ' : 'Submit'}
                    </Button>
                  </FormGroup>
                </fieldset>
              </Form>
            </section>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            border: 1px solid lightgray;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
            border-radius: 6px;
            margin-top: 70px;
          }
          .notification {
            color: #ab003c;
          }
          .header {
            width: 100%;
            height: 120px;
            background-color: #2196f3;
            margin-bottom: 30px;
            border-radius-top: 6px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px !important;
          }
          a {
            color: blue !important;
          }
          img {
            margin: 15px 30px 10px 50px;
          }
        `}
      </style>
    </Container>
  )
}

export default Login
