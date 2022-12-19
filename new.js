//document.getElementById("count-el").innerText = 5


/*הגדרת ערך קבוע אינטג'ר במשתנה 
let count = 5

console.log(count)*/ 


/*חישוב בין 2 משתנים
let myAge = 35;
let humanDogRatio = 7

let count = myAge * humanDogRatio
console.log(myDogAge)*/


/*ערכים משתנים במשתנה

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50 
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)


bonusPoints = bonusPoints + 45
console.log(bonusPoints)*/

/* סכימה של כמה משתנים מסוג אינטג'ר
let lap1 = 34
let lap2 = 33
let lap3 = 36

function lapSum () {
    console.log(lap1 + lap2 + lap3)
}

lapSum()*/ 

/* פונקציה ליצירת הוספה/סכימה אוטו'
let lapsCompleted = 0

function increment() {
    lapsCompleted = lapsCompleted + 1
}

increment()
increment()
increment()

console.log(lapsCompleted)*/

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

//clearInterval(count);
