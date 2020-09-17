const selectSection = (showID, sections) => {
    hideALL(sections)
    let show = document.getElementById(showID);
    show.style.display = "block";
}

const hideALL = (hideList) => {
    hideList.forEach((h) => document.getElementById(h).style.display = "none")
}


window.onload = () => {

    ////MAIN-MENU

    //set All sections to hide on first run
    let sections = ["ABOUT","MUSIC"]
    hideALL(sections)

    let navAbout = document.getElementById("nav-about")
    let navMusic = document.getElementById("nav-music")

    navAbout.onclick = function(){selectSection("ABOUT",sections)}
    navMusic.onclick = function(){selectSection("MUSIC",sections)}

    let releases = ["RELEASE01","RELEASE02","RELEASE03"]
    hideALL(releases)
    let navRelease01 = document.getElementById("nav-release01")
    let navRelease02 = document.getElementById("nav-release02")
    let navRelease03 = document.getElementById("nav-release03")

    navRelease01.onclick = function(){selectSection("RELEASE01",releases)}
    navRelease02.onclick = function(){selectSection("RELEASE02",releases)}
    navRelease03.onclick = function(){selectSection("RELEASE03",releases)}


}