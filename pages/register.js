import axios from 'axios'
import React, { useState, useContext } from 'react'
import registerStyle from '../styles/Register.module.css'
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
import { useRouter } from 'next/router'
// import { registerUser } from '../components/auth'
import AppContext from '../components/context'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { AppleLoginButton } from 'react-social-login-buttons'
import Header from '../components/Header'
import { signIn, getSession, getCsrfToken } from 'next-auth/react'
// register a new user
const Register = () => {
  const [data, updateData] = useState({ email: '', username: '', password: '' }) // takes in these three values
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const router = useRouter()
  //

  function onChange(event) {
    // when input fields are updated
    updateData({ ...data, [event.target.name]: event.target.value })
  }

  const signInWithGoogle = async () => {
    signIn('google', { callbackUrl: '/' }) // redirected to /server-side-example
    toggleLogIn()
  }

  const signInWithFacebook = async () => {
    signIn('facebook', { callbackUrl: '/' }) // built in with NextAuth
    toggleLogIn()
  }
  // TODO: add apple login
  const signInWithApple = async () => {
    signIn('apple', { callbackUrl: '/' }) // built in with NextAuth
    toggleLogIn()
  }
  // TODO: add email credential login
  // const signInWithEmail = async () => {
  //   signIn('email', { email: data.email }, { callbackUrl: '/' }) // built in with NextAuth
  //   toggleLogIn()
  // }

  const registerUser = async (event) => {
    event.preventDefault()

    const inputData = {
      email: data.email,
      password: data.password,
    }

    await axios.post('/api/coffeecard/users/register', inputData)
    signIn('credentials', {
      email: inputData.email,
      password: inputData.password,
      callbackUrl: `${window.location.origin}/login`,
      redirect: false,
    })
      .then(function (result) {
        router.push(result.url)
      })
      .catch((err) => {
        alert('Failed to register: ' + err.toString())
      })
  }

  return (
    <Container>
      <Row>
        <Col sm='12' md={{ size: 5, offset: 3 }}>
          <div className='paper'>
            <Header />
            <section className='p-3'>
              {Object.entries(error).length !== 0 &&
                error.constructor === Object &&
                error.message.map((error) => {
                  return (
                    <div // error message
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
              >
                <span>Sign up with Facebook</span>
              </FacebookLoginButton>
              <GoogleLoginButton onClick={signInWithGoogle} className='mb-3'>
                <span>Sign up with Google</span>
              </GoogleLoginButton>
              <AppleLoginButton onClick={signInWithApple}>
                Sign up with Apple
              </AppleLoginButton>
              <div className={registerStyle.or}>or</div>
              <Form method='POST' action='api/auth/signin/email'>
                <fieldset disabled={loading}>
                  {/* <FormGroup>
                    <Label>Username:</Label>
                    <Input
                      disabled={loading}
                      onChange={
                        (e) => setData({ ...data, username: e.target.value }) // update username
                      }
                      value={data.username}
                      type='text'
                      name='username'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup> */}
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      // value={data.email}
                      type='email'
                      name='email'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={(event) => onChange(event)}
                      // value={data.password}
                      type='password'
                      name='password'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button
                      style={{
                        backgroundColor: '#40312e',
                      }}
                      onClick={registerUser}
                      className='col-sm-12'
                      disabled={false}
                    >
                      {loading ? 'Loading..' : 'Register with email'}{' '}
                      {/* if loading, show loading, else show register */}
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
          //   border: 1px solid lightgray;
          //   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
          //     0px 1px 1px 0px rgba(0, 0, 0, 0.14),
          //     0px 2px 1px -1px rgba(0, 0, 0, 0.12);
          //   border-radius: 6px;
          //   margin-top: 70px;
          // }
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
export default Register

Register.getInitialProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req }) // see if there is a session
  const csrfToken = await getCsrfToken(context) // for email sign in
  if (session && res && session.sessionToken) {
    // if there is a session, res, and accessToken, redirect to home page
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
