let book = {
    "Titre" : "L'Enfant Noir ",
    "Auteur" : "Camara Laye",
    "Année " : 1953
  }
  
  function displayBookInfo(){
    console.log("Titre:",book.Titre);
    console.log("Auteur:",book.Auteur);
    console.log("Année :",book["Année "]);
  }
  displayBookInfo();