class Panier {
    constructor (id,prix,dateAchat,ligneCommandes){
        const ligneCommandes=[{id,produit,quantite,prix}]
        const produit ={
            id:"",
            nom:"",
            description:"",
            prix:"",
            image:"",
            tail:"",
        }
        this.id=id
        this.prix=prix
        this.dateAchat=dateAchat
        this.ligneCommandes=ligneCommandes
        this.quantite=quantite
        this.prix=prix
    }
    

}
export default Panier