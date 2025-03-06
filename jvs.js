document.getElementById("verMasBtn").addEventListener("click", function() {
    let info = document.getElementById("informacionOculta");

    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
        info.classList.add("visible");
        this.textContent = "Ver menos";
    } else {
        info.classList.remove("visible");
        info.classList.add("hidden");
        this.textContent = "Ver más";
    }
});
