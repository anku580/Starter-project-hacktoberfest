let filter = document.querySelector(".filter");

filter.addEventListener("keyup", () => {
    // get value of input
    let filterUser = document.querySelector(".filter").value.toUpperCase();

    // get contributor
    let contributor = document.querySelector(".contributors")
    // get user
    let user = contributor.querySelectorAll("div.user");

    for (let i = 0; i < user.length; i++) {
        let username = user[i].getElementsByTagName("h3")[0];

        if (username.innerHTML.toUpperCase().indexOf(filterUser) > -1) {
            user[i].style.display = "";
        }
        else {
            user[i].style.display = "none";
        }
    }
});