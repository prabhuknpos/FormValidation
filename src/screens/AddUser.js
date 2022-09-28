import React, {useState} from 'react';
import {addUser} from '../service/api';
import {NavLink, useNavigate } from 'react-router-dom';
import { 
    Typography ,
    Button,    
    Form, 
    Input,  
  } from 'antd';

  const {Title} = Typography;

const initialValue = {
    name:"",
    username:"",
    email:"",
    phone:"",
}

const AddUser = () => {
    const [user,setUser] = useState(initialValue);
    const {name,username,email,phone} = user;

    const history = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value});

        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('/all');
    }


  return (
    <div>
    <Title level={2} >Add All User Details</Title>
    <Form 
   style={{marginTop:"20px"}}
   labelCol={{span:8,}}
   wrapperCol={{span:8}}
   >
<Form.Item label="Name">
 <Input placeholder='Enter  name' 
 name="name"
 onChange={(e) => onValueChange(e)} 
 value={name}
 ></Input>
</Form.Item>

<Form.Item label="User Name">
 <Input placeholder='Enter User name' 
 name="username"
 onChange={(e) => onValueChange(e)} 
 value={username}
 ></Input>
</Form.Item>

<Form.Item label="Email">
 <Input placeholder='Enter Your Email' 
 name="email"
 onChange={(e) => onValueChange(e)} 
 value={email}
 ></Input>
</Form.Item>

<Form.Item label="Phone">
 <Input placeholder='Enter  Phone Number' 
 name="phone"
 onChange={(e) => onValueChange(e)} 
 value={phone}
 ></Input>
</Form.Item>

<Form.Item>
    <Button onClick={() => addUserDetails()} >Add User</Button>
    <Button onClick={() => history.push("/all") } >Cancel</Button>
</Form.Item>

   </Form>
    </div>
  )
}

export default AddUser