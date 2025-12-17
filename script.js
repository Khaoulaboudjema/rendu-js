// recupérer les données json



// on utilise fetch
const API_URL = `https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json`;

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log('Données récupérées:', data);

        // récuperer les id
        const nomentreprise =
            document.getElementById("logo");
        data.nomentreprise;

        const slogan =
            document.getElementById("slogan");
        data.slogan;

        const beneficesContainer =
            document.getElementById("benefices");
        // data.beneficescontainer;
        const produits =
            document.getElementById("produits");

        const services =
            document.getElementById("Services");
        data.services;

    
       const hero = document.getElementById("titreHero"); 
        hero.textContent = data.nomCommercial; 
        

        const texteAppelAction = document.getElementById("slogan");
     texteAppelAction.textContent =data.phraseAccroche ; 

        const button = document.getElementById ("button");
        button.textContent = data.texteAppelAction ; 
        const avantagesClients =
            document.getElementById("témoignages");
        // hero.textContent = avantagesClients;

        


        console.log();
        //  créer mon html sur JS 
        // boucle pour produits 




        data.produits.forEach(produit => {
            const card = document.createElement("div");

            console.log(produit.nom);
            const nomArtcile = document.createElement("h4");
            nomArtcile.textContent = produit.nom;
            console.log(nomArtcile);

            const description = document.createElement("p");
            description.textContent = produit.description;

            const image = document.createElement("img");
            image.src = produit["image-url"];


            card.appendChild(image);
            card.appendChild(nomArtcile);
            card.appendChild(description);
            produits.appendChild(card);


        });

        data.services.forEach(service => {
            const card = document.createElement("div");

            console.log(service.nom);
            const nom = document.createElement("h5");
            nom.textContent = service.nom;
            console.log(nom);

            const description = document.createElement("p");
            description.textContent = service.description;

            card.appendChild(nom);
            card.appendChild(description);
            services.appendChild(card);

        })
        data.temoignages.forEach(temoignage => {
            const card = document.createElement("div");

            console.log(temoignage.prenom);
            const prenom = document.createElement("h5");
            prenom.textContent = temoignage.prenom;
            console.log(prenom);

            const typeExperience = document.createElement("p");
            typeExperience.textContent = temoignage.typeExperience;

            const commentaire = document.createElement("p");
            commentaire.textContent = temoignage.commentaire;

            card.appendChild(prenom);
            card.appendChild(typeExperience);
            card.appendChild(commentaire);
            avantagesClients.appendChild(card);



        })
            data.avantagesClients.forEach(avantages => {
                const card_autre = document.createElement("div");
                card_autre.textContent = avantages;
                beneficesContainer.appendChild(card_autre);

            });

    })


