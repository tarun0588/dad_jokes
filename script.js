let key = "/OTRDlWxT+FZ5ADPi5xMxA==JxA8Cbmzj9pqm5Un";
let joke = document.getElementById("joke");
let btn = document.querySelector(".btn");

function show() {
    let datarequest = fetch("https://api.api-ninjas.com/v1/jokes?limit=1", {
  headers: {
    "x-Api-key": key
  },
});

datarequest.then(response => response.json())
.then(parsedResponse => {
    parsedResponse.forEach(element => {
        joke.innerText = element.joke; 
    });
})
}

btn.addEventListener("click", () =>{
  joke.innerText = "Updating..."
  setTimeout(() => {
    btn.innerText = "Tell me a joke";
  }, 2000);
    show();
});