//inputs
var btn = document.querySelector("#btn-check");
var txt_input = document.querySelector("#txt-input");
var txt_output = document.querySelector("#txt-output");
var bonana_url = "https://api.funtranslations.com/translate/minion.json";

//processes
function makeMyUrl(text)
{
    return(bonana_url+"?"+"text="+text);
}

function errorHandler(error)
{
    alert("Unexpected error: "+error);
}

function fetchit(url)
{
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        txt_output.innerText=json.contents.translated})
    .catch(errorHandler)
}

function helper(){
    console.log("Voila!");
    fetchit(makeMyUrl(txt_input.value));
}

btn = btn.addEventListener("click",helper);

