import React from "react";
import api from "../Api/Api";
import User from "../layout/model/User";



const AdminUsers = () => {
    const [users,setUsers]= React.useState([]);

    const recupUsers = async () => {
        api.post ("/api/users/all")
        .then(function (response) {
          const listUsers = response.data.map (
            user => new User(user.id,user.nom,user.prenom,user.email,user.role)
          )
          setUsers(listUsers);
            
          })
          .catch(function (error) {
            
            console.log(error);
          });
        }
          React.useEffect(()=>{
            recupUsers();
          },[]);
    console.log(users)
    return (
        <>
            <h1>Administration des Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Adresse Mail</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>

                            <td>{user.nom} </td>
                            
                            <td>{user.prenom}</td>
                            <td>{user.email} </td>
                            
                            <td>{user.role} </td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
 
 export default AdminUsers