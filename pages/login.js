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
// import AppContext from '../components/context'
import { useUser, useUpdateUser } from '../components/context'
import { 
  FacebookLoginButton, 
  GoogleLoginButton, 
  AppleLoginButton 
} from 'react-social-login-buttons'
import registerStyle from '../styles/Register.module.css'
import Header from '../components/Header'
// next-auth modules
import { getToken } from "next-auth/jwt"
import { signIn, getSession, getCsrfToken } from "next-auth/react"
// getSession() React Hook is the easiest way to check if someone is signed in

function Login({provider, csrfToken}) {
  const [data, updateData] = useState({ identifier: '', password: '' }) //identifier is the username or email
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()
  const toggleLogIn = useUpdateUser()



  function onChange(event) { // when input fields are updated
    updateData({ ...data, [event.target.name]: event.target.value })
  }

  const signInWithGoogle = async () => {
    signIn("google", { callbackUrl: '/me'}); // redirected to /server-side-example
    toggleLogIn();
  }

  const signInWithFacebook = async() => {
    signIn("facebook", { callbackUrl: '/'}); // built in with NextAuth
    toggleLogIn();
  }
  // TODO: add apple login
  const signInWithApple = async() => {
    signIn("apple", { callbackUrl: '/'}); // built in with NextAuth
    toggleLogIn();
  }
  // TODO: add email credential login
  const signInWithEmail = async () => {
    signIn("email", { callbackUrl: '/'}); // built in with NextAuth
    toggleLogIn();
  }


  //console.log("loggedIn", loggedIn)
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
                onClick={signInWithFacebook}
                className='mb-3'
              ></FacebookLoginButton>
              <GoogleLoginButton
                onClick={signInWithGoogle}
                className='mb-3'
              ></GoogleLoginButton>
              <AppleLoginButton
                onClick={signInWithApple}
              ></AppleLoginButton>
              <div className={registerStyle.or}>or</div>
              <Form method="POST" action="api/auth/signin/email">
                <fieldset disabled={loading}>
                  <FormGroup>
                    <Input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                    <Label>Email Address:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      name='identifier'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  {/* <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      type='password'
                      name='password'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup> */}

                  <FormGroup>
                    {/* <span className='row justify-content-center mb-3 '>
                      <a href=''>
                        <small style={{ color: '#40312e' }}>
                          Forgot Password?
                        </small>
                      </a>
                    </span> */}
                    <Button
                      style={{ backgroundColor: '#40312e' }}
                      className='col-sm-12'
                      onClick={signInWithEmail}
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
// getInitialProps() enables server-side rendering in a page and allows you to do initial data population, 
// it means sending the page with the data already populated from the server.
// https://www.youtube.com/watch?v=kB6YNYZ63fw [Create your own next-auth Login Pages]
Login.getInitialProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req }) // see if there is a session
  const csrfToken = await getCsrfToken(context) // for email sign in
  if (session && res && session.accessToken) { // if there is a session, res, and accessToken, redirect to home page
    res.writeHead(302, {
      Location: '/',
    })
    res.end()
    return
  }
  return {
    session: undefined,
    csrfToken: await getCsrfToken(context), // for email sign in
  }
}

export default Login
