document.addEventListener("DOMContentLoaded", function()
{
    const saiyanNavigation = document.getElementById("saiyanN");
    const saiyanHeading = document.getElementById("saiyansh3");
    saiyanNavigation.addEventListener("click", function()
    {
        saiyanHeading.scrollIntoView({behavior: "smooth"});
    });

    const earthlingsNavigation = document.getElementById("earthlingsN");
    const earthlingsHeading = document.getElementById("earthlingsh3");
    earthlingsNavigation.addEventListener("click", function()
    {
        earthlingsHeading.scrollIntoView({behavior: "smooth"});
    });

    const villainsNavigation = document.getElementById("villainsN");
    const villainsHeading = document.getElementById("villainssh3");
    villainsNavigation.addEventListener("click", function()
    {
        villainsHeading.scrollIntoView({behavior: "smooth"});
    });

    const spiritualBeingsNavigation = document.getElementById("spiritualBeingsN");
    const spiritualBeingsHeading = document.getElementById("spiritualBeingssh3");
    spiritualBeingsNavigation.addEventListener("click", function()
    {
        spiritualBeingsHeading.scrollIntoView({behavior: "smooth"});
    });


    const containerGoku = document.getElementById("gokuContainer");
    const gokuBox = document.getElementById("gokuInfo");
    const gokuVisual = document.getElementById("gokuImage");
    const title = document.getElementsByClassName("titleGoku");

    const containerVegeta = document.getElementById("vegetaContainer");
    const vegetaBox = document.getElementById("vegetaInfo");

    const containerBroly = document.getElementById("brolyContainer");
    const brolyBox = document.getElementById("brolyInfo");

    const containerTrunks = document.getElementById("trunksContainer");
    const trunksBox = document.getElementById("trunksInfo");

    const containerGoten = document.getElementById("gotenContainer");
    const gotenBox = document.getElementById("gotenInfo");

    const containerGohan = document.getElementById("gohanContainer");
    const gohanBox = document.getElementById("gohanInfo");

    const containerPan = document.getElementById("panContainer");
    const panBox = document.getElementById("panInfo");

    const containerKrillin = document.getElementById("krillinContainer");
    const krillinBox = document.getElementById("krillinInfo");
    
    const containerYamcha = document.getElementById("yamchaContainer");
    const yamchaBox = document.getElementById("yamchaInfo");

    const containerKais = document.getElementById("kaisContainer");
    const kaisBox = document.getElementById("kaisInfo");

    const containerGods = document.getElementById("godsContainer");
    const godsBox = document.getElementById("godsInfo");

    const containerDBVillains = document.getElementById("dbVillainsContainer");
    const dbVillainsBox = document.getElementById("dragonBallVillainsInfo");

    const containerDBZVillains = document.getElementById("dbzVillainsContainer");
    const dbzVillainsBox = document.getElementById("dragonBallZVillainsInfo");

    const containerDBSVillains = document.getElementById("dbsVillainsContainer");
    const dbsVillainsBox = document.getElementById("dragonBallSuperVillainsInfo");

    const containerDBGTVillains = document.getElementById("dbgtVillainsContainer");
    const dbgtVillainsBox = document.getElementById("dragonBallGTVillainsInfo");


    containerGoku.addEventListener("mouseover", function()
    {
        gokuBox.style.display = "block";
    });
    containerGoku.addEventListener("mouseout", function()
    {
        gokuBox.style.display = "none";
    });


    containerVegeta.addEventListener("mouseover", function()
    {
        vegetaBox.style.display = "block";
    });
    containerVegeta.addEventListener("mouseout", function()
    {
        vegetaBox.style.display = "none";
    });


    containerBroly.addEventListener("mouseover", function()
    {
        brolyBox.style.display = "block";
    });
    containerBroly.addEventListener("mouseout", function()
    {
        brolyBox.style.display = "none";
    });


    containerTrunks.addEventListener("mouseover", function()
    {
        trunksBox.style.display = "block";
    });
    containerTrunks.addEventListener("mouseout", function()
    {
        trunksBox.style.display = "none";
    });


    containerGoten.addEventListener("mouseover", function()
    {
        gotenBox.style.display = "block";
    });
    containerGoten.addEventListener("mouseout", function()
    {
        gotenBox.style.display = "none";
    });


    containerGohan.addEventListener("mouseover", function()
    {
        gohanBox.style.display = "block";
    });
    containerGohan.addEventListener("mouseout", function()
    {
        gohanBox.style.display = "none";
    });


    containerPan.addEventListener("mouseover", function()
    {
        panBox.style.display = "block";
    });
    containerPan.addEventListener("mouseout", function()
    {
        panBox.style.display = "none";
    });


    containerKrillin.addEventListener("mouseover", function()
    {
        krillinBox.style.display = "block";
    });
    containerKrillin.addEventListener("mouseout", function()
    {
        krillinBox.style.display = "none";
    });


    containerTien.addEventListener("mouseover", function()
    {
        tienBox.style.display = "block";
    });
    containerTien.addEventListener("mouseout", function()
    {
        tienBox.style.display = "none";
    });


    containerYamcha.addEventListener("mouseover", function()
    {
        yamchaBox.style.display = "block";
    });
    containerYamcha.addEventListener("mouseout", function()
    {
        yamchaBox.style.display = "none";
    });


    containerKais.addEventListener("mouseover", function()
    {
        kaisBox.style.display = "block";
    });
    containerKais.addEventListener("mouseout", function()
    {
        kaisBox.style.display = "none";
    });


    containerGods.addEventListener("mouseover", function()
    {
        godsBox.style.display = "block";
    });
    containerGods.addEventListener("mouseout", function()
    {
        godsBox.style.display = "none";
    });


    containerAngels.addEventListener("mouseover", function()
    {
        angelsBox.style.display = "block";
    });
    containerAngels.addEventListener("mouseout", function()
    {
        angelsBox.style.display = "none";
    });


    containerDBVillains.addEventListener("mouseover", function()
    {
        dbVillainsBox.style.display = "block";
    });
    containerDBVillains.addEventListener("mouseout", function()
    {
        dbVillainsBox.style.display = "none";
    });


    containerDBZVillains.addEventListener("mouseover", function()
    {
        dbzVillainsBox.style.display = "block";
    });
    containerDBZVillains.addEventListener("mouseout", function()
    {
        dbzVillainsBox.style.display = "none";
    });


    containerDBSVillains.addEventListener("mouseover", function()
    {
        dbsVillainsBox.style.display = "block";
    });
    containerDBSVillains.addEventListener("mouseout", function()
    {
        dbsVillainsBox.style.display = "none";
    });


    containerDBGTVillains.addEventListener("mouseover", function()
    {
        dbgtVillainsBox.style.display = "block";
    });
    containerDBGTVillains.addEventListener("mouseout", function()
    {
        dbgtVillainsBox.style.display = "none";
    });
});