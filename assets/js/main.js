const search = document.querySelector(".fa-search");
const cncSearch = document.querySelector(".search__cancel");
const searchBar = document.querySelector(".search-bar");
const user = document.querySelector(".user");
const form = document.querySelector(".form");
const btnCancel = document.querySelector(".form__cancel");
const btnSignup = document.querySelector(".sign-up-btn")
const btnCanSignup = document.querySelector(".form__cancel2");
const haveAccount = document.querySelector(".haveAccount")
// search form
search.addEventListener('click', function(){
    searchBar.classList.add("search-bar-active");
})
cncSearch.addEventListener('click', function(){
    searchBar.classList.remove("search-bar-active");

})
// user log in
user.addEventListener('click', function(){
    form.classList.add("login-active")
})
btnCancel.addEventListener('click', function(){
    form.classList.remove("login-active")
})
// user  signUp
btnSignup.addEventListener("click", function(){
    form.classList.remove("login-active")
    form.classList.add("signUp-active")
})
btnCanSignup.addEventListener("click", function(){
    form.classList.remove("signUp-active")

})
// have Account
haveAccount.addEventListener("click", function(){
    form.classList.remove("signUp-active")
    form.classList.add("login-active")
    
})