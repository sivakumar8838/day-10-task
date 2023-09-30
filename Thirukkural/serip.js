//   to get the element the  from html

let Word = document.querySelector(".Word")
let buttonSearch=document.querySelector(".siva")
let meaning = document.querySelector('.sk');
// to use async function to click search button to api use meanings and part of speech
async function searchmean() {
    // to error handle use try and catch
try {
// to get the word from the user is store bu word
    let word = Word.value;
    // api link fetch json link
let as=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
let data=await as.json();
//  console.log(data)
    let meaningword = data[0].meanings;
    
    //  to create the list and list items

    let list = document.createElement('ul')
    // to use for loop meaning handle

for(let partOfSpeech of meaningword ){
    let listItem = document.createElement('li');
    // to append the inner html listItem

    listItem.innerHTML = ` <b class="sa"><hr>Part Of Speech:${partOfSpeech.partOfSpeech}</b>`;
    // to create the order list is sublist

    let subList = document.createElement('ol');
    
for (let definition of partOfSpeech.definitions) {
        let subListItem = document.createElement('li');
        subListItem.innerHTML = `${definition.definition}`;
        subList.appendChild(subListItem);
    }

    // append the sublist to the list item
    listItem.appendChild(subList);

    // append the list items to the main list
    list.appendChild(listItem);
}

meaning.innerHTML=``;
meaning.appendChild(list);
}
catch (error) {
console.log('error fetching the meaning', error);
}
}
