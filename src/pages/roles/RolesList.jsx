import React, { useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import  {getRoles} from "../../redux/actions/rolesAction";
// import './RolesList.css'
// import Roles from './Roles'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";

const RolesList = () => {
  const roles = useSelector((state) => state.allRoles.roles);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRoles();
  }, []);
  const fetchRoles = async () => {
    const response = await axios
      .get("https://localhost:44380/api/Roles")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getRoles(response.data));
  };
  console.log("Roles :", roles);

  const deleteRole = async roleId => {
    const response = await axios.delete(`https://localhost:44380/api/Roles/${roleId}`);
    // dispatch(deleteRoles(response.data))
    fetchRoles();
  };
 
  
  const renderList = roles.map((role) => {
    // const {roleId, roleName, description} = role;
    return (
          <tbody className="four wide column" key={role.roleId}>
              <tr>
                            <td className="table-item">{role.roleId}</td>
                            <td className="table-item">{role.roleName}</td>
                            <td className="table-item">{role.description}</td>
                            <td className="table-item">
                              <Link style={{textDecoration: 'none'}} to={`/editRoles/${role.roleId}`}>
                                <Button variant="contained" color="success">
                                  Edit
                                </Button>
                              </Link >
                                <Button 
                                  onClick={() => deleteRole(role.roleId)} 
                                  variant="outlined" 
                                  startIcon={<DeleteIcon />}>
                                  Delete
                                </Button>
                            </td>
                </tr>
          </tbody>
        );
      });
      return <>
      <div>
        <h2 className="header">ROLES LIST</h2>
        <Link style={{textDecoration: 'none'}} to={`/addRoles`}>
                                <Button variant="contained" color="success">
                                  Add new role
                                </Button>
        </Link>
        <div><br></br></div>
        <table className="table">
        <thead className="table-header">
                            <tr >
                            <th className="table-item-header">ROLE ID</th>
                            <th className="table-item-header">ROLE Name</th>
                            <th className="table-item-header">Description</th>
                            <th className="table-item-header">Actions</th>
                            </tr>
              </thead>
          {renderList}
        </table>
          
      </div>
          
      
      </>;
};

export default RolesList;