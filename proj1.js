let countEl=document.getElementById("count-el")
let saved=document.getElementById("saved-el")

let count=0
function increment(){
    count+=1
    countEl.textContent=count
}

function save(){
    let countStr = count + " - "
    
    saved.textContent+=countStr
    countEl.textContent=0
    count=0
}


