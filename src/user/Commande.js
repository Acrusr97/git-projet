import React from "react";
import api from "../Api/Api";
import AddCommande from "../layout/model/AddCommande";
const Commandes = () => {
  const [commandeUser, setCommandeUser] = React.useState([]);

  const recupCommande = async () => {
    api
      .post("api/commande/save")
      
      .then((response) => {
        const userComd = response.data.map(
          (userCommande) =>
            new AddCommande(
              commandeUser.idUser,
              commandeUser.idProduit,
              commandeUser.qte
            )
          
          
            
        );
        setCommandeUser(userComd);
        console.log('tst')
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    recupCommande();
  });
  return (
    <>
    <alerte> yio</alerte>
      {commandeUser.map((userCommande) => (
        <section className="commande" key={userCommande.idUser}>
          <section>
            {userCommande.idProduit}
            <section>{userCommande.qte}</section>
          </section>
        </section>
      ))}
    </>
  );
};
export default Commandes;
import React from "react";
import api from "../Api/Api";
import AddCommande from "../layout/model/AddCommande";
const Commandes = () => {
  const [commandeUser, setCommandeUser] = React.useState([]);

  const recupCommande = async () => {
    api
      .post("api/commande/save")
      
      .then((response) => {
        const userComd = response.data.map(
          (userCommande) =>
            new AddCommande(
              commandeUser.idUser,
              commandeUser.idProduit,
              commandeUser.qte
            )
          
          
            
        );
        setCommandeUser(userComd);
        console.log('tst')
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(() => {
    recupCommande();
  });
  return (
    <>
    <alerte> yio</alerte>
      {commandeUser.map((userCommande) => (
        <section className="commande" key={userCommande.idUser}>
          <section>
            {userCommande.idProduit}
            <section>{userCommande.qte}</section>
          </section>
        </section>
      ))}
    </>
  );
};
export default Commandes;
