let filpElement= document.getElementById("textToFlip");
let flippedParagrapghElement = document.getElementById("flippedText")
let countText = document.getElementById("text");
let charToCount = document.getElementById("character");
let ParaCounts = document.getElementById("countsNumber");
let textToCountWords=document.getElementById("textToCountWords");
let numberOfWords=document.getElementById("numberOFWords");
let textToSortElement=document.getElementById("textToSort");
let sortOrderElement=document.getElementById("sortOrder");
let textOrdered = document.getElementById("textOrdered");


function flippString(){
   let text= filpElement.value;
    let newText="";
    for(var i=text.length-1;i>=0;i--) {
        newText+=text[i];
    }
    flippedParagrapghElement.innerHTML=newText;

}

function countCharacter(){
    let counter=0;
    for (let index = 0; index < countText.value.length; index++) {
        if(charToCount.value == countText.value[index]){
            counter++
        }
    }
    ParaCounts.innerHTML=counter;
}


function countWords(){
    let text=textToCountWords.value;
    let counter=1;
    text = text.trim();
    if(text.length!=0){
        for(let i=0;i<text.length;i++){
            if(text[i-1]==" " && text[i] != " "){
                counter++;
            }
        }
        numberOfWords.innerHTML=counter;
    } else { 
        counter=0;
        numberOfWords.innerHTML=counter;
    } 

}


function sortText() {
    let valueInArray = (textToSortElement.value).split("");
    if(sortOrderElement.value == "D" || sortOrderElement.value == "d") {
        valueInArray.sort().reverse();
        result = valueInArray.join("");
        textOrdered.innerHTML= "Text Sorted In Descinding: "+ result;
    } else if(sortOrderElement.value == "A" || sortOrderElement.value == "a") {
        valueInArray.sort();
        result = valueInArray.join("");
        textOrdered.innerHTML= "Text Sorted In Descinding: "+result;
    } else if(sortOrderElement.value == "" || textToSortElement.value == "") {
        textOrdered.innerHTML= "Fill Input Fields!";
    }
}