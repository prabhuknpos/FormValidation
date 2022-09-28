import React , {useState, useEffect } from 'react'
import {NavLink } from 'react-router-dom';
import { deleteUser, getallUsers } from '../service/api';
import { 
  Button,      
} from 'antd';

const AllUser = () => {

  const [user,setUser] = useState([]);

  useEffect(() =>{
    getUsers();
  },[]);

  const getUsers = async () =>{
    const response = await getallUsers();
    console.log(response);
    setUser(response.data);
}

const deleteData = async (id) => {
  await deleteUser(id);
  getUsers();
}


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>       
          {
            user.map((data) => {
              // console.log(data.name);
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td><Button component={NavLink} to={`/edit/${data.id}`}>Edit</Button>
                <Button onClick={()=>deleteData(data.id)}>Cancel</Button>
                </td>             
              </tr>
            })
          }
       
      </table>
    </div>
  )
}

export default AllUser