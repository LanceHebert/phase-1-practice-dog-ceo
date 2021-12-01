const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then((resp) => resp.json())
  .then((data) => {
    
    //empty array create
    const dogArray = Object.keys(data.message);    
    //pushing keys of object to create array of just dog names
    const dropD = document.getElementById("option-container")
    //creating a submit confirm for the dropdown to get updated value for filter
    dropD.addEventListener("submit",(e)=>{
        e.preventDefault();
        //clearing out the previous filter
        document.querySelector("#dog-breeds").innerHTML = ""; 
        //filter check to compare first dog letter with value of dropdown       
        const filtered = dogArray.filter( (element) => {            
            return element[0].charAt(0) === document.querySelector("#breed-dropdown").value;
        }); 
     
        for (let element of filtered) {         
            const li = document.createElement("li");
            li.textContent = element;
            dogList = document.querySelector("#dog-breeds");     
            li.addEventListener("click", (event) => {            
                document.querySelectorAll("#dog-breeds li").forEach( element => { 
                    element.style.color = "black"
                })
                event.target.style.color = "red";
           });     
           dogList.append(li);
        }
    })   
  });

fetch(imgUrl)
  .then((resp) => resp.json())
  .then((data) => {    
    data.message.forEach((element) => {
      
      const li = document.createElement("li");
      li.innerHTML = `<img src=${element} alt="Dog picture" >`;
      dogImgContain = document.querySelector("#dog-image-container");
      dogImgContain.append(li);
    });    
  });
console.log("%c HI", "color: firebrick");
