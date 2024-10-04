let textEL = document.getElementById('text')
let speedEL = document.getElementById('speed')
const text = "We Love Programing"
let speed = 300 / speedEL.value
let idx = 1

WriteText()

function WriteText() {
    textEL.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }
    setTimeout(WriteText, speed);
}

speedEL.addEventListener('input', (e) => speed = 300 / e.target.value)