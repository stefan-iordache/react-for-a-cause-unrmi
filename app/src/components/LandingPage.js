import React, {useRef} from 'react'

function LandingPage() {
    let id = 0
    let backgrounds = [`url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Cetatea_de_Scaun_a_Sucevei_la_ceas_de_seara.jpg/2560px-Cetatea_de_Scaun_a_Sucevei_la_ceas_de_seara.jpg)`
    ,`url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg/1920px-Ateneo_Rumano%2C_Bucarest%2C_Ruman%C3%ADa%2C_2016-05-29%2C_DD_73.jpg')`
    ,`url('https://upload.wikimedia.org/wikipedia/commons/b/be/Pelisor_Castle%2C_Sinaia.jpg')`]
    
    let backgroundDiv = useRef()

    let background = {
        backgroundImage:`${backgrounds[id]}`,
        width: '100vw',
        height: '100vh'

    }
    
    let landingPageContainer = {
        objectFit: 'cover',
        height :'100%',
        position: 'relative',
    }

    function backgroundChange() {
        id++
        id = id % backgrounds.length
        //backgroundDiv.backgroundImage = `${backgrounds[id]}`
    }
    
    //setInterval(backgroundChange, 2000)

    return (
        <div style={landingPageContainer}>
            <div ref={backgroundDiv} style={background}>
            </div>
        </div>
    )
}
   
export default LandingPage