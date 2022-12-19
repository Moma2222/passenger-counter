let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    // פונקציה הוספה-סכימה
    count += 1
    countEl.innerText = count
}
// פונקציה לשמירה
function save() {
    let countStr = count + " - "
    saveEl.innerHTML += countStr
    console.log(count)
    fanction clearInterval(countEl) {
        
    }
    /*countEl.textContent = 0
    count = 0*/
}
