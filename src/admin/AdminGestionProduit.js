import React from "react";
import api from "../Api/Api";
import Produit from "../layout/model/Produit";



const AdminGestionProduit = () => {
    const [produits,setProduits]= React.useState([]);

    const recupProduits = async () => {
        api.post ("/api/produit/all")
        .then(function (response) {
          const listProduits = response.data.map (
            produit => new Produit(produit.id,produit.nom,produit.prix,produit.image,produit.description,produit.tail)
          )
          setProduits(listProduits);
            
          })
          .catch(function (error) {
            
            console.log(error);
          });
        }
          React.useEffect(()=>{
            recupProduits();
          },[]);
    console.log(produits)
    return (
        <>
            <h1>Gestion des Produits</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Titre</th>
                        <th scope="col">prix</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map(produit => (
                        <tr key={produit.id}>
                            <th scope="row"><img src={produit.image} className='admin-table-image' alt='...'/></th>
                            
                            <td>{produit.nom}</td>
                            <td>{produit.prix} €</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
 
 export default AdminGestionProduit