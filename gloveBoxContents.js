const mystorage = {
    car: {
        inside: {
            "glove box":"maps",
            "passenger seat":"crumbs",
        },
        outside: {
            trunk :"jack",
        },
    },
  };     

            function gloveBoxContents() {

  const gloveBoxContents = mystorage.car.inside["glove box"];
  console.log(gloveBoxContents); 

}
gloveBoxContents();