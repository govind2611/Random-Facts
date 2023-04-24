let fact = document.querySelector("#fact");
let btn = document.querySelector("#generate");
let apiKey = "api key is not provided"; // for security purpose
let options = {
  method: "GET",
  headers: { "x-api-key": apiKey },
};
let url = "https://api.api-ninjas.com/v1/facts?limit=1";

const generateFact = () => {
  fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      fact.innerText = data[0].fact;
    });
};
btn.addEventListener("click", generateFact);
window.addEventListener("load", generateFact);
