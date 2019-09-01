const user = {
    username: 'Guven',
    options: ['default']
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
    user.options.push(option);
    e.target.elements.option.value=''
    }
    render()    
}

const removeAll = () => {
    user.options= []
}

const render= () => {

const template = (
       
        
    <div>
    <h1>{user.username}</h1>
    <ol>
    {

       user.options.map((op) => {

        return <li>{op}</li>

       })

        
    }
    </ol>    
    
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option"></input>
    <button >Say Hello</button>
    <button disabled onClick= {removeAll}>Remove</button>
    </form>
   
    </div>    
        
    )

const tempText= document.getElementById("apptext")
ReactDOM.render(template,tempText)
}

render()