const header = document.getElementById("topBar");
const rect = header.getBoundingClientRect();
const title = document.getElementById("mainContainer");
const fromTop = rect.bottom;
title.style.top = fromTop+"px";
const menuButton = document.getElementById("notInMenu");
const e = document.getElementById("menu");
e.style.display = "none";

$(document).ready(function(){
    $("#notInMenu").click(function(){
        $("#menu").slideDown("slow");
    });

});


$(document).ready(function(){
    $("#mainContainer").click(function(){
        $("#menu").slideUp("slow");
    });
});
