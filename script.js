function toggleMenu() {
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-links");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function toggleProjects() {
    const panel = document.getElementById("more-projects");
    const button = document.getElementById("toggle-projects-btn");
    if (!panel || !button) {
        return;
    }
    const isHidden = panel.classList.contains("hidden");
    panel.classList.toggle("hidden");
    button.textContent = isHidden ? "See less" : "See more";
    button.setAttribute("aria-expanded", isHidden ? "true" : "false");
}
