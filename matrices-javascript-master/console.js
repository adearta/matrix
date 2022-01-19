const writeToConsole = function(Text)
{
    Text = Text.replace(/  /g, "&nbsp;&nbsp;");
    var ExistingText = document.getElementById("console").innerHTML
    var NewText = "";

    if (arguments.length > 0)
    {
        if (ExistingText != "")
        {
            NewText = ExistingText;
        }

        NewText += Text;
    }
    else
    {
        NewText = ExistingText + "<br />";
    }

    document.getElementById("console").innerHTML = NewText;
}


const clearConsole = function()
{
    document.getElementById("console").innerHTML = "";
}
