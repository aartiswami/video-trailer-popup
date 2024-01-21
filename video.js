const btn1 = document.querySelector(".btn")
const close1 = document.querySelector(".close-icon")
const trailerContainer1 = document.querySelector(".trailer-container")
const video1 = document.querySelector("video")

btn1.addEventListener("click", () => {
    trailerContainer1.classList.remove("active")
})

close1.addEventListener("click", () => {
    trailerContainer1.classList.add("active")
    video1.pause()
    video1.currentTime = 0
})