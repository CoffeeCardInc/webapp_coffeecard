/* /pages/register.js */

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
import { registerUser } from '../components/auth'
import AppContext from '../components/context'
import { FacebookLoginButton } from 'react-social-login-buttons'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { AppleLoginButton } from 'react-social-login-buttons'
import Header from '../components/Header'

// register a new user
const Register = () => {
  const [data, setData] = useState({ email: '', username: '', password: '' }) // takes in these three values
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const appContext = useContext(AppContext)
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
                onClick={() => alert('Hello')}
                className='mb-3'
              >
                <span>Sign up with Facebook</span>
              </FacebookLoginButton>
              <GoogleLoginButton
                onClick={() => alert('Hello')}
                className='mb-3'
              >
                <span>Sign up with Google</span>
              </GoogleLoginButton>
              <AppleLoginButton
                onClick={() => alert('Hello')}
                // style={{ color: 'white', background: 'black' }}
                className={registerStyle.icons}
              >
                <span>Sign up with Apple</span>
              </AppleLoginButton>
              <div className={registerStyle.or}>or</div>
              <Form>
                <fieldset disabled={loading}>
                  <FormGroup>
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
                  </FormGroup>
                  <FormGroup>
                    <Label>Email:</Label>
                    <Input
                      onChange={
                        (e) => setData({ ...data, email: e.target.value }) // update email
                      }
                      value={data.email}
                      type='email'
                      name='email'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginBottom: 30 }}>
                    <Label>Password:</Label>
                    <Input
                      onChange={
                        (e) => setData({ ...data, password: e.target.value }) // update password
                      }
                      value={data.password}
                      type='password'
                      name='password'
                      style={{ height: 50, fontSize: '1.2em' }}
                    />
                  </FormGroup>
                  <FormGroup>
                    {/* <span>
                      <a href=''>
                        <small>Forgot Password?</small>
                      </a>
                    </span> */}
                    <Button
                      style={{
                        // float: 'middle',
                        // width: 180,
                        backgroundColor: '#40312e',
                      }}
                      className='col-sm-12'
                      // color='primary'
                      disabled={false}
                      onClick={() => {
                        setLoading(true)
                        registerUser(data.username, data.email, data.password) // this puts it in the Strapi database, from
                          .then((res) => {
                            // set authed user in global context object
                            appContext.setUser(res.data.user)
                            setLoading(false)
                            console.log(
                              `registered user: ${JSON.stringify(res.data)}`
                            )
                          })
                          .catch((error) => {
                            console.log(`error in register: ${error}`)
                            //setError(error.response.data);
                            setLoading(false)
                          })
                      }}
                    >
                      {loading ? 'Loading..' : 'Register'}{' '}
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
export default Register
