document.getElementById("id1").addEventListener("click", myFunction);
        
function myFunction() {
    document.getElementById('heading1').remove();
    document.getElementsByTagName('body')[0].classList.add("bodyStyle");
    document.getElementById('demo').innerHTML = 'I am learning Javascript';
}