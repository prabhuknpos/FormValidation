import React, { useState,useEffect } from 'react';
// import "antd/dist/antd.css";
import { PlusOutlined } from '@ant-design/icons';
import { 
  Button, 
  Checkbox, 
  Form, 
  Input,
  Radio,
  Upload,DatePicker,
  Select
} from 'antd';

import {useNavigate} from 'react-router-dom';
// import Home from './Home';

const { TextArea } = Input;
const {Option} = Select;

const RegForm = () => {
 
  const [inputValues,setInputValues] = useState({
    firstName:"",
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',
    mobilenumber:'',
    address:'',   
    gender:"",
    checkbox:""
  });

  const [validation,setValidation] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    mobilenumber:"",
    address:"",
    gender:"",
    checkbox:""
  });

  // const[gender,setGender] = useState();
  // const[genderError,setGendrError] = useState();

  // const [submitted, setSubmitted] = useState(false);
  // const [isChecked,setIsChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  
 
  function handleChange(e) {
    const {name,value} = e.target;
    setInputValues({...inputValues, [name]:value});
  }

  
  // console.log(inputValues.password == inputValues.confirmPassword);

  // const handleOnChange = () => {
  //   setIsChecked(!isChecked);
  // }

  const checkValidation = () => {

    let errors = validation;

    if(!inputValues.firstName.trim())
    {
      errors.firstName="First Name is Required !!";
    }
   
    else{
      errors.firstName="";
    }

    if(!inputValues.lastName.trim())
    {
      errors.lastName="Last Name is Required !!";
    }
    
    else{
      errors.lastName="";
    }

    let regexemail=/^[A-Za-z]+@[a-z]+\.[a-z]+$/;
    let resemail=regexemail.test(inputValues.email)
    if(!inputValues.email.trim()){
    errors.email="Email is required";
    }
else if(!resemail){
    errors.email="Email should matches sample@gmail.com";
}
else{
    errors.email="";
      }

      let regexpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      let respass=regexpass.test(inputValues.password)
      if(!inputValues.password.trim()){
         errors.password="Please enter your password";
      }
     
     else if(!respass) {
          errors.password="Minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
          }
      else{
         errors.password="";
     }

     if(inputValues.password === inputValues.confirmPassword)
     {
       errors.confirmPassword= "";
      }
      else{
       errors.confirmPassword ="Password and Confirm Password does Not Match!";
     }


if(!inputValues.mobilenumber.trim()){
    errors.mobilenumber="Enter your Phone number";
}

else{
    errors.mobilenumber="";
}

if(!inputValues.address.trim())
{
errors.address="Please Enter your address";
  }
  else{
    errors.address= "";
  }
  if(!inputValues.gender )
  {
    errors.gender ="Please Select Any One!! ";
  }
  else{
    errors.gender="";
  }

  // if(!inputValues.checkbox)
  // {
  //   errors.checkbox = "Please Accept Terms and  Conditions!!";
  // }
  // else{
  //   errors.checkbox ="";
  // }
 

  }



  useEffect(() => {
  checkValidation();
},[inputValues]);


// const handleOnChange = () => {
//   setIsChecked(!isChecked);
// };

const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmitted(true);
    
  };
  const toggleRoute = () =>{
    setLoggedIn(!loggedIn)
    navigate('/stocks',{require:true});
  }

//   function SubmitButton(){
//     if(firstName)
//     {
//         return <Button type='primary'>Submit</Button>
//     }
//     else{
//         return <Button type='primary' disabled>Submit</Button>
//     };
// };

return (
  <div>
   <Form 
   style={{marginTop:"20px"}}
   labelCol={{span:8,}}
   wrapperCol={{span:8}}
   onFinishFailed={() => alert('Failed to submit')}
   onFinish={() => alert('Form Submitted')}
   onSubmit={handleSubmit}
   >
<Form.Item label="FirstName">
<Input placeholder='Enter first name' 
name="firstName"
value={inputValues.firstName}
onChange={(e) => handleChange(e)}></Input>
</Form.Item>
{validation.firstName && <p style={{color:"red"}}>{validation.firstName}</p>}


<Form.Item label="LastName">
  <Input
  placeholder='Lastname'
  name="lastName"
  value={inputValues.lastName}
  onChange={(e) => handleChange(e)}
  ></Input>
</Form.Item>
{validation.lastName && <p style={{color:"red"}}>{validation.lastName}</p>}



<Form.Item label="Email">
  <Input  
  placeholder='Email'
  name="email"
  value={inputValues.email}
  onChange={(e) => handleChange(e)}
  ></Input>
</Form.Item>
{validation.email && <p style={{color:'red'}}>{validation.email}</p>}

<Form.Item label="Password">
  <Input.Password 
  placeholder='password'
  name="password"
  value={inputValues.password}
  onChange={(e)=>handleChange(e)}
  ></Input.Password>
</Form.Item>
{validation.password && <p style={{color:"red"}}>{validation.password}</p>}

<Form.Item label="Confirm Password">
  <Input.Password 
  placeholder='Confirm Password'
  name='confirmPassword'
  value={inputValues.confirmPassword}
  onChange={(e) => handleChange(e)}
  ></Input.Password>
</Form.Item>
{validation.confirmPassword && <p style={{color:"red"}} >{validation.confirmPassword}</p>}

<Form.Item label="Mobile Number">
  <Input
  placeholder='Mobile Number'
  name="mobilenumber"
  value={inputValues.mobilenumber}
  onChange={(e) => handleChange(e)}

  ></Input>
</Form.Item>
{validation.mobilenumber && <p style={{color:"red"}}>{validation.mobilenumber}</p>}

<Form.Item label="Address">
  <TextArea 
  placeholder='Enter Address'
  name="address"
  value={inputValues.address}
  onChange={(e) => handleChange(e)}
  ></TextArea>
</Form.Item>
{validation.address && <p style={{color:"red"}}>{validation.address}</p>}

<div>
<Form.Item label="Gender">
  <Radio name='gender' value="Male" checked={inputValues.gender === "Male"} onChange={(e)=>handleChange(e)} >Male</Radio>
  <Radio name='gender' value="FeMale" checked={inputValues.gender === "FeMale"} onChange={(e)=>handleChange(e)}>FeMale</Radio>
  <Radio name='gender' value="Other" checked={inputValues.gender === "Other"} onChange={(e)=>handleChange(e)}>Other</Radio>
</Form.Item>
{validation.gender && <p style={{color:'red'}}>{validation.gender}</p>}


<Form.Item label="DateOfBirth">
  <DatePicker></DatePicker>
</Form.Item>
</div>

<Form.Item label="Select">
<Select defaultValue="select" style={{ width: 420 }} >
      <Option value="select">Select Any One</Option>
      <Option value="html">Html</Option>
      <Option value="css">Css</Option>
      <Option value="javascript" >
        Javascript
      </Option>
      <Option value="react">React</Option>
    </Select>
    </Form.Item>

    <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

<Form.Item >
  <Checkbox 
  name='checkbox'
  
  onChange={handleChange}
  >Accept the Terms and Conditions</Checkbox>
</Form.Item>
{validation.checkbox && <p style={{color:"red"}}>{validation.checkbox}</p>}   

<Button type='primary' onClick ={toggleRoute}>Submit</Button>
{/* <SubmitButton></SubmitButton> */}

   </Form>
  </div>
)
}

export default RegForm