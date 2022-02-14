import { useState } from 'react';
import styled from 'styled-components';
import { signup } from '../../../adapters/authAdminAPI';
import Header from '../../../components/Header';

const ownerSignup = ()=>{

  const [values,setValues]=useState({
      firstName:'',
      lastName:'',
      username:'',
      hashPassword:''
  });
  const {firstName,lastName,username,hashPassword}=values;

  const valueOnChange = (e)=>{
    const {name,value}=e.target;
    setValues({...values,[name]:value});
  };

  const submitForm = (e)=>{
    e.preventDefault();
    signup({firstName,lastName,username,hashPassword}).then((res)=>{
      console.log(res);
    });
  };

  return(
      <>
        <Header></Header>
        <OwnerSignupContainer className='centerHorizontal'>
          <OwnerSignupWrap>
            <h1>Admin Signup</h1>
            <FormContainer>
              <Form onSubmit={submitForm}>
                    <FormGroup>
                      <label>First Name:</label>
                      <input type='text' value={firstName} name='firstName' onChange={valueOnChange}></input>
                    </FormGroup>
                    <FormGroup>
                      <label>Last Name:</label>
                      <input type='text' value={lastName} name="lastName" onChange={valueOnChange}></input>
                    </FormGroup>
                    <FormGroup>
                      <label>Username:</label>
                      <input type='text' value={username} name="username" onChange={valueOnChange}></input>
                    </FormGroup>
                    <FormGroup>
                      <label>Password:</label>
                      <input type='password' value={hashPassword} name="hashPassword" onChange={valueOnChange}></input>
                    </FormGroup>
                    <Button type='submit'>Create Admin</Button>
              </Form>
            </FormContainer>
          </OwnerSignupWrap>
        </OwnerSignupContainer>
      </>
    );
};
const OwnerSignupContainer=styled.div``;
const OwnerSignupWrap=styled.div``;
const FormContainer=styled.div``;
const Form=styled.form``;
const FormGroup=styled.div``;
const Button=styled.button``;

export default ownerSignup;