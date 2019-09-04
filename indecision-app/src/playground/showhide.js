let buttonName='Show'
let pVis= false;

const onButtonClick = () => {

    if(buttonName == 'Hide'){
        buttonName = 'Show';
        pVis=false;
    
    }
    else{
        buttonName = 'Hide';
        pVis=true;

    }
        
    render()
}


const render = () => {

    const temp = (

        <div>
        <button onClick= {onButtonClick}>{buttonName}</button>
        {pVis && (<p>Nisan</p>)}
        </div>
    )
    
    
    const tempText = document.getElementById('apptext')
    ReactDOM.render(temp,tempText)
}

render()