
console.log('Client side javascript file is loaded!')

const form = document.querySelector('form')
const searchEl = document.querySelector('input')
const loader = document.querySelector('p.load')
const messageOne = document.querySelector('p.p1')
const messageTwo = document.querySelector('p.p2')

messageTwo.textContent = ''
messageTwo.textContent = ''


form.addEventListener('submit', (e) => {
    e.preventDefault()
    loader.style.display = 'block'
    messageOne.textContent = ''
    messageTwo.textContent = ''
    const location = searchEl.value

    fetch('/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
        if (data.error) {
            console.log(data.error)
            loader.style.display = 'none'
            messageOne.textContent = data.error
            messageTwo.textContent = ''
            } else {
                loader.style.display = 'none'
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})

