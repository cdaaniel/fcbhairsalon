const toggleMobile = () => {
    const menu = document.querySelector("#menu");
    const nav = document.querySelector("nav ul");
    const navLinks = document.querySelector("nav ul").childNodes;

    //toggle nav
    menu.addEventListener("click", () => {
        nav.classList.toggle("toggle-nav");
        //bar animations
        menu.classList.toggle("toggle");
        navLinks.forEach((link) => {
            link.addEventListener("click", function () {
                nav.classList.remove("toggle-nav");
                menu.classList.remove("toggle");

            });
        });
    });
};

toggleMobile();