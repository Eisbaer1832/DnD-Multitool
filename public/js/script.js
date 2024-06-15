const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const origin_word = "HALLO"
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



function codecheck(){
    code = document.getElementById('code_input').value;
    if (code == "") {
        response.innerHTML="Gib was ein du Kek."
    } else {
      $.ajax({
        type: 'POST',
        async : true,
        cache: false,
        data:{'code': code},
        url: '/public/check_code',
        success: function(res) {
          console.log("prossesing")
          if (res == "false"){
            response.innerHTML="Leider nicht, dam dam daaam"
          }else
            final_letter.style.display = "flex";  
            scrollToNextSection()       
        }
      });
    }
}