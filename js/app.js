const optionsEl = document.getElementById('options')
const interierLampEl = document.getElementById('interierLamp')
const lampEl = document.getElementById('lamp')


optionsEl.addEventListener('click', event =>{
    const optionsLampEl = event.target.closest('.options-lamp')
    if (optionsLampEl) {
        console.log(optionsLampEl.dataset.action)
    if (optionsLampEl.dataset.action == 1) {
        interierLampEl.src = 'images/lamp1.webp'
        lampEl.src = 'images/lamp1.webp'
    } else if (optionsLampEl.dataset.action == 2) {
        interierLampEl.src = 'images/lamp2.webp'
        lampEl.src = 'images/lamp2.webp'
    } else if (optionsLampEl.dataset.action == 3) {
        interierLampEl.src = 'images/lamp3.webp'
        lampEl.src = 'images/lamp3.webp'
    }
    }
})