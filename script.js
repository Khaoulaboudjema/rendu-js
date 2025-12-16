// recupérer les données json
// on utilise fetch
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées:', data);

// récuperer les id
       const nomentreprise= 
        document.getElementById("logo");

        const slogan =
        document.getElementById("slogan"); 
       
        const beneficescontainer = 
        document.getElementById ("benefices"); 

        const produits = 
        document.getElementById ("produits");

        const Services= 
        document. getElementById("Services");

        const clients= 
        document. getElementById("témoignages");
        
        console.log( );
        






    })
    .catch(error => console.error('Erreur lors de la récupération des données :', error));






