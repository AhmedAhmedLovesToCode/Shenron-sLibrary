document.addEventListener("DOMContentLoaded", function()
{
    const earthNavigation = document.getElementById("earthN");
    const earthHeading = document.getElementById("earthsh");
    earthNavigation.addEventListener("click", function()
    {
        earthHeading.scrollIntoView({behavior: "smooth"});
    });

    const namekNavigation = document.getElementById("namekN");
    const namekHeading = document.getElementById("nameksh");
    namekNavigation.addEventListener("click", function()
    {
        namekHeading.scrollIntoView({behavior: "smooth"});
    });

    const otherworldNavigation = document.getElementById("otherWorldN");
    const otherworldHeading = document.getElementById("otherWorldsh");
    otherworldNavigation.addEventListener("click", function()
    {
        otherworldHeading.scrollIntoView({behavior: "smooth"});
    });

    const supremeKaiPlanetNavigation = document.getElementById("supremeKaiPlanetN");
    const supremeKaiPlanetHeading = document.getElementById("supremeKaiPlanetsh");
    supremeKaiPlanetNavigation.addEventListener("click", function()
    {
        supremeKaiPlanetHeading.scrollIntoView({behavior: "smooth"});
    });
});