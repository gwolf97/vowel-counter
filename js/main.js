const text = document.querySelector("#text")
const checkBtn = document.querySelector(".check-btn")
const answer = document.querySelector(".answer")



const vowelFinder = function(phrase){
    let count = 0
    var lowerCase = phrase.toLowerCase()
    const vowels = "aeiou"
    for (let letter of lowerCase){
       if(vowels.indexOf(letter) > -1){
           count = count + 1
       }
    }
    answer.innerHTML = `${count}`
}

checkBtn.addEventListener("click", function(){
    var phrase = text.value
    vowelFinder(phrase)
})