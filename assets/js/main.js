const search = document.querySelector(".fa-search");
const cncSearch = document.querySelector(".search__cancel");
const searchBar = document.querySelector(".search-bar")
search.addEventListener('click', function(){
    searchBar.classList.add("search-bar-active");
})
cncSearch.addEventListener('click', function(){
    searchBar.classList.remove("search-bar-active");

})

