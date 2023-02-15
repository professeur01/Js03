let book = {
    "Titre" : "L'Enfant Noir ",
    "auteur" : "Camara Laye",
    "année " : 1953
  }
  
  function displayBookInfo(){
    console.log("Titre:",book.Titre);
    console.log("Auteur:",book.Auteur);
    console.log("année :",book["année "]);
  }
  displayBookInfo();
