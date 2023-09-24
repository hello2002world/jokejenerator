const btnEl=document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apiKey="Xf+9cl3rN/AJOJptjqURqA==E8EEHm6MtJQCNZSk"

const options = {
    method:"GET",
    headers:{
        "x-Api-Key": apiKey,
    },
};

const apiURL='https://api.api-ninjas.com/v1/dadjokes?limit=1'

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled= true;
        btnEl.innerText= "LODING...";
    
       const response= await fetch(apiURL,options)
       const data =  await response.json()
       jokeEl.innerText = data[0].joke;
    
       btnEl.disabled= false;
        btnEl.innerText= "TELL ME A JOKE";
        
    } catch (error) {
        jokeEl.innerText = "An error happened try again later";
        btnEl.disabled= false;
        btnEl.innerText= "TELL ME A JOKE";
        console.log(Error);
        
    }

}


btnEl.addEventListener("click", getJoke)