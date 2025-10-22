let NewElement = "";

document.addEventListener("DOMContentLoaded", () => {
    fetch("assets/ProductsJson/Products.json")
    .then(response => response.json())
    .then(Product => {

        Product.forEach(Menus => {
            NewElement += `
                <div class="col m-1">
                    <div class="card" style="width: 18rem;">
                        <img src="${Menus.Source}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${Menus.Name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="assets/Pages/PageOrder.html?id=${Menus.Id}" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            `;
        });

        document.getElementById("Menu-Display").innerHTML = NewElement;
    })
});

function TogglePassword(){
    const Pass = document.getElementById("UserPassword");
    if(Pass.type == "password"){
        Pass.type = "text"
    }else{
        Pass.type = "password";
    }
}


function LogIn(){
    const UserName = document.getElementById("UserName");
    const Pass = document.getElementById("UserPassword");
    const Profile = document.getElementById("UserProfile")
    if(UserName.value == "Lisay" && Pass.value == "12345"){
        Profile.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${UserName.value}
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            `;
    }else if(UserName.value != "Lisay"){

    }   
}

function SignUpTogglePassword(){
    const SignInPass = document.getElementById("SignInPass");
    const Eye1 = document.getElementById("Eye1");
    if(SignInPass.type == "password"){
        SignInPass.type = "text";
        Eye1.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }else{
        SignInPass.type = "password";
        Eye1.innerHTML = `<i class="fa-regular fa-eye"></i>`;       
    }
}

function ConfirmTogglePassword(){
    const Cpass = document.getElementById("ConfirmPass");
    const Eye1 = document.getElementById("Eye2");
    if(Cpass.type == "password"){
        Cpass.type = "text";
        Eye1.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }else{
        Cpass.type = "password";
        Eye1.innerHTML = `<i class="fa-regular fa-eye"></i>`;       
    }
}

document.getElementById("ConfirmPass").addEventListener("keyup", event => {
    const SignInPass = document.getElementById("SignInPass");
    const Cpass = document.getElementById("ConfirmPass");
    const Warn = document.getElementById("Warning");

    if(SignInPass.value != Cpass.value){
        Cpass.style.borderColor = "red";
        Warn.textContent = "Make Sure your Password is Match";
    }else{
        Cpass.style.border = "var(--bs-border-width) solid var(--bs-border-color)";
        Warn.textContent = "";
    }

    SignInPass.addEventListener("keyup", event => {
        if(Cpass.value != SignInPass.value){
            Cpass.style.borderColor = "red";
            Warn.textContent = "Make Sure your Password is Match";
        }else{
            Cpass.style.border = "var(--bs-border-width) solid var(--bs-border-color)";
            Warn.textContent = "";
        }
    })
})

