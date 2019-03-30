console.log("its working");
var checkButton = document.getElementsByClassName("navigation_checkbox");
if (checkButton.checked == true) {
    document.getElementsByClassName("header").style.display = 'none';
    document.getElementsByClassName("main").style.display = 'none';
    document.getElementsByClassName("footer").style.display = 'none';
};