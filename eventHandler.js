let btn = document.querySelector("#btn-login");
btn.addEventListener('click',function LoggedIn(){
    let login = document.querySelector("#user-info")
    login.innerText = 'user logged In successfully'
})
let btnUpdate = document.querySelector("#btn-update")
btnUpdate.addEventListener('click', function updateName(){
    // let name = document.querySelector("#name-id")
    let nameInput = document.querySelector("#input-name")
    let name = nameInput.value 
    console.log('name',name)
    let nameP = document.querySelector
    ("#name-id")
    nameP.innerText=name
})