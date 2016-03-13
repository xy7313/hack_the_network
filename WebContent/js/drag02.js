function allowDrop(ev)
{
ev.preventDefault();
}

function drag(ev)
{
ev.dataTransfer.setData("Text",ev.target.id);
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
x=document.getElementById("div2");
x.style.background = "green";
}

//show number of players' cards
$(function () 
      { $("[data-toggle='popover']").popover();
      });