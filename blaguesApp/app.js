let titre = document.getElementById("titre");
let ressource = document.getElementById("ressource");
console.log(titre);
//titre.innerHTML ="ma blague";
fetch("https://api.blablagues.net")
  .then((res) => res.json())
  .then((res) => {
    titre.innerHTML = res.data.content.text_head;
    ressource.innerHTML = res.data.content.text;
    console.log(ressource);
  })
  .catch((e) => console.log("ERREUR : " + e))
  .finally(() => console.log("Fin du traitement !"));
