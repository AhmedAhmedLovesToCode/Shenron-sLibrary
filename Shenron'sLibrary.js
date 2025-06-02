$(function() {
    $("#dragonBallAccordion").accordion({
        active: false,
        collapsible: true,
        heightStyle: "content"
    });
});



$("#aboutMeBox").tooltip();

setTimeout(function(){
    $("#aboutMeBox").fadeIn(1200);
}, 1000);

$(document).ready(function() 
{
    let popupVisible = false;  

    $('#loadDragonBalls').click(function() 
    {
        if (!popupVisible) 
        {
             
            $.ajax({
                url: 'dragonballs.json',  
                method: 'GET',
                dataType: 'json',
                success: function(data) {
                    let output = '<h2>Dragon Balls</h2><ul>';
                    data.dragonBalls.forEach(function(ball) {
                        output += `<li><strong>${ball.stars} Star Ball</strong>: ${ball.description}</li>`;
                    });
                    output += '</ul>';
                    $('#dragonBallsContainer').html(output);
                    $('#dragonBallsPopup').fadeIn(); 
                    popupVisible = true;
                },
                error: function(xhr, status, error) 
                {
                    $('#dragonBallsContainer').html('<p>Failed to summon the Dragon Balls. Try again later.</p>');
                    $('#dragonBallsPopup').fadeIn();
                    popupVisible = true;
                    console.error('Error loading Dragon Balls:', error);
                }
            });
        } 
        else 
        {
             
            $('#dragonBallsPopup').fadeOut();
            popupVisible = false;
        }
    });
});




document.addEventListener("DOMContentLoaded", function()
{
    const dbsNavigation = document.getElementById("dbsNavigation");
    const dbsHeading = document.getElementById("dbsHeading");
    dbsNavigation.addEventListener("click", function()
    {
        dbsHeading.scrollIntoView({behavior: "smooth"});
    });

    const dbzNavigation = document.getElementById("dbzNavigation");
    const dbzHeading = document.getElementById("dbzHeading");
    dbzNavigation.addEventListener("click", function()
    {
        dbzHeading.scrollIntoView({behavior: "smooth"});
    });

    const dbNavigation = document.getElementById("dbNavigation");
    const dbHeading = document.getElementById("dbHeading");
    dbNavigation.addEventListener("click", function()
    {
        dbHeading.scrollIntoView({behavior: "smooth"});
    });

    const dbgtNavigation = document.getElementById("dbgtNavigation");
    const dbgtHeading = document.getElementById("dbgtHeading");
    dbgtNavigation.addEventListener("click", function()
    {
        dbgtHeading.scrollIntoView({behavior: "smooth"});
    });

    const dbdNavigation = document.getElementById("dbdNavigation");
    const dbdHeading = document.getElementById("dbdHeading");
    dbdNavigation.addEventListener("click", function()
    {
        dbdHeading.scrollIntoView({behavior: "smooth"});
    });



    const saiyansNavigation = document.getElementById("saiyansNavigation");
    const saiyansHeading = document.getElementById("saiyansHeading");
    saiyansNavigation.addEventListener("click", function()
    {
        saiyansHeading.scrollIntoView({behavior: "smooth"});
    });

    const earthlingsNavigation = document.getElementById("earthlingsNavigation");
    const earthlingsHeading = document.getElementById("earthlingsHeading");
    earthlingsNavigation.addEventListener("click", function()
    {
        earthlingsHeading.scrollIntoView({behavior: "smooth"});
    });

    const villainsNavigation = document.getElementById("villainsNavigation");
    const villainsHeading = document.getElementById("villainsHeading");
    villainsNavigation.addEventListener("click", function()
    {
        villainsHeading.scrollIntoView({behavior: "smooth"});
    });

    const spiritualBeingsNavigation = document.getElementById("spiritualBeingsNavigation");
    const spiritualBeingsHeading = document.getElementById("spiritualBeingsHeading");
    spiritualBeingsNavigation.addEventListener("click", function()
    {
        spiritualBeingsHeading.scrollIntoView({behavior: "smooth"});
    });




    const kiAttacksNavigation = document.getElementById("kiAttacksNavigation");
    const kiAttacksHeading = document.getElementById("kiAttacksHeading");
    kiAttacksNavigation.addEventListener("click", function()
    {
        kiAttacksHeading.scrollIntoView({behavior: "smooth"});
    });

    const transformationsNavigation = document.getElementById("transformationsNavigation");
    const transformationsHeading = document.getElementById("transformationsHeading");
    transformationsNavigation.addEventListener("click", function()
    {
        transformationsHeading.scrollIntoView({behavior: "smooth"});
    });

    const uniqueAbilitiesNavigation = document.getElementById("uniqueAbilitiesNavigation");
    const uniqueAbilitiesHeading = document.getElementById("uniqueAbilitiesHeading");
    uniqueAbilitiesNavigation.addEventListener("click", function()
    {
        uniqueAbilitiesHeading.scrollIntoView({behavior: "smooth"});
    });







    const earthNavigation = document.getElementById("earthNavigation");
    const earthHeading = document.getElementById("earthHeading");
    earthNavigation.addEventListener("click", function()
    {
        earthHeading.scrollIntoView({behavior: "smooth"});
    });

    const namekNavigation = document.getElementById("namekNavigation");
    const namekHeading = document.getElementById("namekHeading");
    namekNavigation.addEventListener("click", function()
    {
        namekHeading.scrollIntoView({behavior: "smooth"});
    });

    const otherworldNavigation = document.getElementById("otherworldNavigation");
    const otherworldHeading = document.getElementById("otherworldHeading");
    otherworldNavigation.addEventListener("click", function()
    {
        otherworldHeading.scrollIntoView({behavior: "smooth"});
    });
});