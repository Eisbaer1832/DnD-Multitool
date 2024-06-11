const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const origin_word = "HELLO"
const collection = document.getElementsByClassName("randomletters"); 
console.log(collection);
let interval = null;

for (let j = 0; j < collection.length; j++){
    (function(j){
    collection[j].onmouseenter = event => {
        clearInterval(interval);
        let interval_runs = 0
        interval = setInterval(function() {
            let children = collection[j].children;
            for (let i = 0; i < children.length; i++) {
                if (i < interval_runs)
                {
                    children[i].innerHTML = origin_word[i];
                }else{
                    var random = Math.round(Math.random() * (0 - 25) + 25);    
                    children[i].innerHTML = chars[random];
                }
            }
            
            if (interval_runs >= origin_word.length )
            {
                clearInterval(interval);
            }
    
            interval_runs += 1/3;
    
        }, 35);
    }})(j)
}