// tone js config
const synth = new Tone.Synth().toDestination()

const button = document.getElementsByClassName("button")[0]
const dialog = document.getElementsByClassName("dialog")[0]
const audioPlayer = document.getElementsByClassName("audioPlayer")[0]

let mouseX = 0;
let mouseY = 0;

button.addEventListener("click", () => {
    dialog.style.display = "none"
    audioPlayer.style.display = "block"
    audioPlayer.play()
})

audioPlayer.addEventListener("timeupdate", () => {
    const timeInSec = Math.floor(audioPlayer.currentTime)
    document.body.style.backgroundColor =  `rgb(${timeInSec%255},${mouseX%255},${mouseY%255})`
    // console.log(timeInSec)
})

const handleMouseMove = (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY
}

document.onmousemove = handleMouseMove;
