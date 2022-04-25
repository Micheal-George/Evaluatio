// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amount=localStorage.getItem("amount")
document.querySelector("#wallet").innerText=amount
//
let Mdata=[]
let id
async function searchMovies(){
    try{
    let query=document.querySelector("#search").value
    let url=`https://www.omdbapi.com/?apikey=95e8317&s=${query}`
     let res=await fetch(url)
     let data=await res.json()
     return data
    }catch(err)
    {
        console.log(err)
    }
}

function append(movies)
{
    document.querySelector("#movies").innerHTML=null
    movies.map(function(elem){
        let box=document.createElement("div")

        let image=document.createElement("img")
        image.src=elem.Poster
        let title=document.createElement("h3")
        title.innerText=elem.Title
        let btn=document.createElement("button")
        btn.innerText="Book";
        btn.setAttribute("class","book_now")
        btn.addEventListener("click",function(){
            Mdata.push(elem)
            localStorage.setItem("movie",JSON.stringify(Mdata))
            window.location.href="checkout.html"
            document.querySelector("#search").value=null
        })

        box.append(image,title,btn)
        document.querySelector("#movies").append(box)
    })
}

async function check()
{
 let data= await searchMovies()
 if(data==undefined){
     return
 }
 append(data.Search)
}

function debounce(func,delay)
{
    
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func()
    },delay)
}

