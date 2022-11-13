let isOpen = false
const body = document.body

function openMenu () {
    const container = document.getElementById ("container_mob")
    let hamb = document.getElementById("icons-hamb")
    let close = document.getElementById("icons-close")
    body.classList.toggle ("noscroll")

    if (isOpen) { 

        container.style.display = "none"
        hamb.style.display = "flex"
        close.style.display = "none"
        isOpen = false
    } else {
        container.style.display = "flex"
        hamb.style.display = "none"
        close.style.display = "flex"
        isOpen = true
    }
}

