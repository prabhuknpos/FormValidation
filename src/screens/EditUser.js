import React, {useState,useEffect} from 'react';
import { editUser, getallUsers } from '../service/api';
import { useNavigate, useParams} from 'react-router-dom';

const initialValue = {
  name:"",
  username:"",
  email:"",
  phone:"",
}

const EditUser = () => {

  const [user, setUser] = useState(initialValue);
    const {name, username, email, phone} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
      const response = await getallUsers(id);
      setUser(response.data);
  }

  const history = useNavigate();

  const onValueChange = (e) =>
  {
    //  console.log(e);
    // console.log(e.target.value);
      setUser({...user, [e.target.name]: e.target.value});
      console.log(user);
  }

  const editUserDetails = async () =>{
     await editUser(id,user);
     history.push('/all');
  }

  return (
    <div>
    <Title level={2} >Edit User Details</Title>
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
    <Button onClick={() => editUserDetails()} >Add User</Button>
    <Button onClick={() => history.push("/all") } >Cancel</Button>
</Form.Item>

   </Form>
    </div>
  )
}

export default EditUser