var bookMarkName = document.getElementById("bookmarkName")
var websiteUrl = document.getElementById("bookmarkURL")

var totslMarks = []
if(localStorage.getItem("markets")==null){
    totslMarks=[]
}
else{
    totslMarks = JSON.parse(localStorage.getItem("markets"))
    displayMarket()
}
function addMark(){
    var isvalid = validationInputs(urlRejex ,websiteUrl)&&validationInputs(nameRejex , bookMarkName) ;
   if(isvalid===true ){
    var mark = {
        nameMark :bookMarkName.value,
        websiteUrl :websiteUrl.value
    };
totslMarks.push(mark)
localStorage.setItem("markets" , JSON.stringify(totslMarks))
displayMarket()
}
else{
    document.getElementById("validationElse").classList.remove("d-none")
}
}


function displayMarket(){
document.getElementById("tableContent").innerHTML=``
    for(i=0 ; i<totslMarks.length; i++){
document.getElementById("tableContent").innerHTML+=`

    <tr>
            <td>${i+1}</td>
            <td>${totslMarks[i].nameMark}</td>
            <td><a href="${totslMarks[i].websiteUrl}"target="_blank"><button class="btn btn-visit" >
                   <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button></a></td>
            <td>
                <button onclick="deleteElement(${i})" class="btn btn-delete pe-2" data-index="0" >
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
            </td>
        </tr>

`
}
}

function deleteElement(index){
    totslMarks.splice(index , 1)
    localStorage.setItem("markets" , JSON.stringify(totslMarks))
    displayMarket()
}

var nameRejex = /^[a-zA-Z ]{3,}$/;
var urlRejex = /^.+\.com$/;



function validationInputs( rejex,input){
if(rejex.test(input.value)){
    input.classList.add("is-valid")
    input.classList.remove("is-invalid")
    return true ; 
}
else{
    input.classList.remove("is-valid")
    input.classList.add("is-invalid") 
    return false;
}

}

function canselIcon(){
        document.getElementById("validationElse").classList.add("d-none")

}