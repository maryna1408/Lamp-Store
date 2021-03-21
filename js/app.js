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
        const siblings = findSiblings(optionsLampEl)
        siblings.forEach(sibling => {
            sibling.style.background = ('transparent')
        })
        optionsLampEl.style.background = ('#DEEEEE')
    } else if (optionsLampEl.dataset.action == 2) {
        interierLampEl.src = 'images/lamp2.webp'
        lampEl.src = 'images/lamp2.webp'
        const siblings = findSiblings(optionsLampEl)
        siblings.forEach(sibling => {
            sibling.style.background = ('transparent')
        })
        optionsLampEl.style.background = ('#DEEEEE')
    } else if (optionsLampEl.dataset.action == 3) {
        interierLampEl.src = 'images/lamp3-2.webp'
        lampEl.src = 'images/lamp3-2.webp'
        const siblings = findSiblings(optionsLampEl)
        siblings.forEach(sibling => {
            sibling.style.background = ('transparent')
        })
        optionsLampEl.style.background = ('#DEEEEE')

    }
    }
})

// Utils functions

function findSiblings(element) {
    const parent = element.parentElement
    const children = [...parent.children]
    const siblings = children.filter(child => child != element)
    return siblings
  
    // return [...element.parentElement.children].filter(child => child != element)
  }