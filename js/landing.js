const enterPage = () => {
    const enterWebiste = document.querySelector('#LANDING h1')

    enterWebiste.addEventListener('click', () => {
        console.log()
        document.querySelector('#LANDING').style.display = "none"
        document.querySelector('#CONTENT').style.display = "block"
        document.querySelector('body').style.background= "rgb(243, 243, 243)"

    })
}
enterPage()