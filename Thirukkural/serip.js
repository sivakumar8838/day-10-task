      // create the function for specific thirukural at this explain and english translate to button click 
      function explainkural(a){
         // n is the thirukural number 
         let siva = document.querySelectorAll(".full")[a - 1]; // Select the corresponding explanation div
         siva.innerHTML = ""; // Clear previous explanations if any
      fetch(`https://api-thirukkural.vercel.app/api?num=${a}`)
      .then(sa=>sa.json())
      .then(data=>{
         //  to get the information form the thirukural api
         let title=data.sect_tam;
         let chapter=data.chap_tam
         let exp=data.tam_exp
         let engtitle=data.sect_eng;
         let engChap=data.chap_eng;
         let engKural1=data.eng;
         let engExp=data.eng_exp;
         //  to append the infromation to create the div tag
         let tamil=document.createElement('div')
         tamil.className="tamilKuralExp"
         tamil.innerHTML=` <hr>  <h4 class="red">${title}</h4>
                             <h6>${chapter}</h6>
                             <p>${exp}</p>
                             <h4 class="red">${engtitle}</h4>
                             <h6>${engChap}</h6>
                             <p>${engKural1}</p>
                             <p>${engExp}</p><hr>`
         siva.appendChild(tamil)                    
 
      })
     }
 
     // Create an async function to fetch and display Thirukural  in order
 
     async function Thirukural() {
         for (let i = 1; i <= 1330; i++) {
             // Use await to fetch each sequentially
           try{
             let response = await fetch(`https://api-thirukkural.vercel.app/api?num=${i}`);
           
             let data = await response.json();
 
             // Create a new paragraph element for each verse
             let kurals = document.createElement('p');
     
             kurals.innerHTML = `
                     <p>${i}: ${data.line1}</p>
                     <p class="line2">${data.line2}</p>
                     <button class="kuralExplain" onclick="explainkural(${i})">Explain</button><hr>
                     <div class="full"></div>
             `;
 
             // Append the order to the outblock container
             let as = document.querySelector(".sk");
             as.appendChild(kurals);
           }
         //   to error handle for the thirukural use catch
            catch(error){
             console.log('error for thirukral',error)
            }
         }
     }
 
     // Call the async function to display in order when the page loads
    Thirukural()
