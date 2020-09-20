const enterPage = () => {
    const enterWebiste = document.querySelector('#LANDING')

    enterWebiste.addEventListener('click', () => {
        //document.querySelector('#LANDING').style.display = "none"
        document.querySelector('#CONTENT').style.display = "block"
        document.querySelector('body').style.background= "rgb(243, 243, 243)"
        document.querySelector('#LANDING').style.opacity =  '0'
        document.querySelector('#LANDING').style.pointerEvents =  'none'




    })
}
enterPage()