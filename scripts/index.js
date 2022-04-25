// Store the wallet amount to your local storage with key "amount"
let amount=localStorage.getItem("amount")||0
document.querySelector("#wallet").innerText=amount
document.querySelector("#add_to_wallet").addEventListener("click",addamount)
function addamount()
{
   let money= document.querySelector("#amount").value
   amount=Number(amount)+Number(money);
   localStorage.setItem("amount",Number(amount))
   document.querySelector("#wallet").innerText=amount
   document.querySelector("#amount").value=null
}
