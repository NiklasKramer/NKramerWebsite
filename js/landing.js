const enterPage = () => {


    // Enter through click
    const enterWebiste = document.querySelector('#LANDING')
    enterWebiste.addEventListener('click', () => {
        //document.querySelector('#LANDING').style.display = "none"
        document.querySelector('#CONTENT').style.display = "block"
        document.querySelector('body').style.background= "rgb(243, 243, 243)"
        document.querySelector('#LANDING').style.opacity =  '0'
        document.querySelector('#LANDING').style.pointerEvents =  'none'
    })


    // Enter through scroll
    let counter = 0;
    window.addEventListener('scroll', ()=>{
        if (counter<=100) {
            document.querySelector('#LANDING').style.opacity = (100 - counter).toString()
            counter= counter + 25;
        }
        else{
            document.querySelector('#CONTENT').style.display = "block"
            document.querySelector('body').style.background= "rgb(243, 243, 243)"
            document.querySelector('#LANDING').style.opacity =  '0'
            document.querySelector('#LANDING').style.pointerEvents =  'none'
        }
    })

}
enterPage()