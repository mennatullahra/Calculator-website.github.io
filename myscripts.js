
function view(val)//view content while pressing buttons
{
    var content = $("#viewer").val();
    $("#viewer").val( content=content+val );
}



function clr()
{
    $("#viewer").val( "" );//clear input windows
}

$(document).keypress(function(event){
    if(( event.key === '=')||(event.keyCode === 13)){$("#viewer").innerHTML = calcualte();} //to calculate press = or Enter
    else if((event.keyCode === 99)||(event.keyCode === 67)){$("#viewer").innerHTML = clr();} //to delete press c or C
    
    for(i = 42 ; i <58;i++)//to show numbers & operators which pressed in the keyboard
    {
        if(event.keyCode === i)
        {
            var content = $("#viewer").val();
            $("#viewer").val(content=content+ event.key)
        }
    }
     
});