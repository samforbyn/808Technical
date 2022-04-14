let loginBtn = document.getElementById('login')
let registerBtn = document.getElementById('register')

let all_users = []


registerBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    let uEmail = document.getElementById('user_email').value 
    let uPass = document.getElementById('user_password').value
    let thisUser = [uEmail, uPass]
    all_users.push(thisUser) 

    console.log(all_users)
})

loginBtn.addEventListener('click', (e) =>{
    e.preventDefault()

    let uEmail = document.getElementById('user_email').value 
    let uPass = document.getElementById('user_password').value
    let thisUser = [uEmail, uPass]
    
    console.log(thisUser)
    
    for(let i = 0; i < all_users.length; i++){
        if(all_users[i].includes(uEmail)){
            localStorage.setItem("email", uEmail)
            window.location.href = '/home.html?'
        }
    }
})