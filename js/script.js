let textarea = document.querySelector(".text_area")
let copy = document.querySelector(".copy")


function copyPass(){
    navigator.clipboard.writeText(textarea.value)
}
copy.addEventListener("click", function(){
    copyPass();
    alert("Copied the text: " + textarea.value);
})


