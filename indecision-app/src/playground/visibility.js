
class Visibility extends React.Component {

    constructor(props){

        super(props)
        this.changeState=this.changeState.bind(this)
        this.state= {
            visibility: false
        }
    }


 changeState () {

    this.setState((prevState) => {

        return {
            visibility: !prevState.visibility 
        }
    })
    console.log(this.state.visibility);
    

}


render(){
    return(
        <div>
        <button onClick= {this.changeState} >Change State</button>
        <p>{this.state.visibility ? 'I am Here': 'I am gone'}</p>
        {
            this.state.visibility && (<p>Nisan</p>)
        }
        </div>
    )
}

}

ReactDOM.render(<Visibility />, document.getElementById('apptext'))