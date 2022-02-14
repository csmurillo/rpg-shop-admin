import styled from 'styled-components';


const Login = ()=>{
    return (
        <LoginContainer className='centerHorizontal'>
          <LoginWrap >
            <h1>Login</h1>
            <div>
              <Form>
                <FormGroup>
                  <label>Email</label>
                  <input type='text'></input>
                </FormGroup>
                <FormGroup>
                  <label>Password</label>
                  <input type='text'></input>
                </FormGroup>
                <Button>Login</Button>
              </Form>
            </div>
          </LoginWrap>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
  width:100%;
  padding-top:80px;
  flex-grow: 1;
  // border:1px solid blue;
`;
const LoginWrap = styled.div``;
const Form =styled.form``;
const FormGroup=styled.div``;
const Button =styled.button``;

export default Login;