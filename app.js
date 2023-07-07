let maRequete = new XMLHttpRequest();
maRequete.open("get", "https://api.blablagues.net", true);
maRequete.onload = monEcouteurDeRequete;
//maRequete.send();
function monEcouteurDeRequete() {
  console.log(this.responseText);
}

fetch("https://api.blablagues.net")
  //.then((res) => console.log(res))
  .then((res) =>res.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
