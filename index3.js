function setCookie(name,value,days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function cookieConsent() {
    if (!getCookie('Arys')) {
        $('.toast').toast('show')
    }
}

$('#btnDeny').click(()=>{
    $('.toast').toast('hide')
})

$('#btnAccept').click(()=>{
    setCookie('Arys','BigBoss',7)
    console.log(document.cookie)
    $('.toast').toast('hide')
})

$("document").ready(function (){
    document.cookie = "user=Arystan; expires=Sun, 19 Jun 2022 4:35:00 GMT"
    let navbar = $(".navbar")
    let background = $(".containerhm")
    let switcher = $("#switcher")
    if(localStorage.getItem("theme")==="light"){
        localStorage.setItem("theme", "light")
        navbar.attr("class", "navbar navbar-expand-lg bg-light")
        background.attr("class", "containerhm")
        $("li#switcher").children().replaceWith($('<i class="fi fi-rr-sun"></i>'))
    }else{
        localStorage.setItem("theme", "dark")
        navbar.attr("class", "navbar navbar-expand-lg bg-dark")
        background.attr("class", "black-theme")
        $("li#switcher").children().replaceWith($('<img width="50px" src="https://www.pngimages.pics/images/quotes/english/general/transparent-background-half-moon-png-52650-250078.png" alt="moon">'))
    }

    switcher.on("click", ()=>{
        if(localStorage.getItem("theme")==="light"){
            localStorage.setItem("theme", "dark")
            navbar.attr("class", "navbar navbar-expand-lg bg-dark")
            background.attr("class", "black-theme")
            $("li#switcher").children().replaceWith($('<img width="50px" src="https://www.pngimages.pics/images/quotes/english/general/transparent-background-half-moon-png-52650-250078.png" alt="moon">'))
        }else{
            localStorage.setItem("theme", "light")
            navbar.attr("class", "navbar navbar-expand-lg bg-light")
            background.attr("class", "containerhm")
            $("li#switcher").children().replaceWith($('<i class="fi fi-rr-sun"></i>'))
        }
    })

// load
    cookieConsent()
})