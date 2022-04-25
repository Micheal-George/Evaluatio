// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let amount=localStorage.getItem("amount")
document.querySelector("#wallet").innerText=amount

let movies=JSON.parse(localStorage.getItem("movie"))
console.log(movies)
movies.map(function (elem){
    let box=document.createElement("div")

        let image=document.createElement("img")
        image.src=elem.Poster
        let title=document.createElement("h3")
        title.innerText=elem.Title
        box.append(image,title)
        document.querySelector("#movie").append(box)
})

document.querySelector("#confirm").addEventListener("click",myFun)
function myFun(){
    let seats=document.querySelector("#number_of_seats").value
    let total=Number(amount)-seats*100;
    if(total>=0)
    {
        alert("Booking Successful!")
        localStorage.setItem("amount",total)
        document.querySelector("#wallet").innerText=total
        window.location.reload()
    }
    else{
        alert("Insufficient Balance!")
        document.querySelector("#number_of_seats").value=""
    }
}