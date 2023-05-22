const blob = document.querySelector('#blob')

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

document.querySelector("h1").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((_, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}
// Blob effect
document.body.onpointermove = e => {
    const { clientX, clientY } = e

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3 * 1000, fill: "forwards" })
}
