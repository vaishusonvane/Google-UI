const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Ebter"){
        search();
    }
});

function search(){
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input +"&oq=insta&aqs=chrome.1.69i57j0i131i433i512l3j0i433i512j0i131i433i512l2j69i60.2878j0j7&sourceid=" + input +"&ie=UTF-8"
}