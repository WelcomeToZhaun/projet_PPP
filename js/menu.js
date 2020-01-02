// Menu horizontal
$("header nav ul li, header > div").hover((e) =>
{
    // Affichage du sous-menu
    if (e.currentTarget.classList.length > 0 && e.currentTarget.classList[0].startsWith("sous"))
    {
        $("." + e.currentTarget.classList[0]).addClass("displayed");
        $("." + e.currentTarget.classList[0].substring(4)).addClass("displayed");
    }
    else if (e.currentTarget.classList.length > 0)
    {
        $(".sous" + e.currentTarget.classList[0]).addClass("displayed");
        $("." + e.currentTarget.classList[0]).addClass("displayed");
    }
}, (e) => 
{
    // Désaffichage du sous-menu
    if ( e.currentTarget.classList.length > 0 && e.currentTarget.classList[0].startsWith("sous"))
    {
        $("." + e.currentTarget.classList[0]).removeClass("displayed");
        $("." + e.currentTarget.classList[0].substring(4)).removeClass("displayed");
    }
    else if (e.currentTarget.classList.length > 0)
    {
        $(".sous" + e.currentTarget.classList[0]).removeClass("displayed");
        $("." + e.currentTarget.classList[0]).removeClass("displayed");
    }
})

let open = false;

// Menu vertical
$("header nav a:last-child").click((e) =>
{
    if (open)
    {
        $("body > nav").removeClass("displayed");
        open = false;
    }
    else
    {
        $("body > nav").addClass("displayed");
        open = true;
    }
})