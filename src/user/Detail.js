import React from "react";
import api from "../Api/Api";
import { useParams } from "react-router-dom";

export default function Detail () {
    const [id,prix,dateAchat,setId,setPrix,setDateAchat]
    const ligneCommandes= [id,produit]

    const DetailCommande = async ()=> {
        const {id}=useParams();
        

        api.post(`api/commande/${id}`)
        .then((reponse)=> {
            const CommandeDetail = response.data.map()
        })
       }
       
    }
    
    return (

<section>
<h1> Détail </h1>

<section>

</section>
<input type="text" placeholder="Qte" ></input>
<button type="button" onClick={alert}></button>
<button type="button" onClick={alert}></button>
<section >
  
</section >
</section >

    );
}