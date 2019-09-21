class IndecionApp extends React.Component {


  render(){
    const title = 'Guven'
    const name = 'seckin'
    const o = ['guven', 'seckin']
    const al= "I wanna die"
    return (
        <div>
        <Header title = {title} ></Header>
        <Action name={name} ></Action>
        <Alertt alertMessage= {al}></Alertt>
        <p>Option Lists:</p>
        <Options options = {o}></Options>
        <AddOption></AddOption>
        </div>

    )
  }
}




class Header extends React.Component {

    render(){
        
        return <p>This is from Header {this.props.title}</p>;
    }
}

class Action extends React.Component {
    render(){
        return <button onClick={this.sayHello}>What can I do?</button>
    }

      sayHello() {
        console.log ('hello');
       
    }
}

class Alertt extends React.Component {

 handleAlert() {
   alert('hello');
 }

  render(){
    return <button onClick={this.handleAlert}>Alert me!</button>
  }
}
class Option extends React.Component {

  render(){
    return (
      <div>
     
      <ul>
      <li>{this.props.keys}</li>
      </ul>
      </div>
    )
  }
}

class Options extends React.Component {
  // Man kann bind für method binding benutzen.Deshalb gibt es keine Problem über this keyword
  constructor(props) {
    super(props)
    this.handlerRemoveAll=this.handlerRemoveAll.bind(this)

  }



  handlerRemoveAll(){

    console.log(this.props.options);
    
  }



  render(){
  return (
    <div>

      <button onClick={this.handlerRemoveAll}>Remove All</button>

      {
        this.props.options.map((o) => <Option keys={o}/>)     

      }
    </div>
  )

}} 


class AddOption extends React.Component {
  

  handlerOption(e) {
      e.preventDefault();
      const option= e.target.elements.option.value;
      if(option){
        alert(option)
      }

  }
  
  render(){

    return (
      <div>
      <form onSubmit={this.handlerOption}>
        <input type="text" name="option" />
        <button>Add option</button>
      
      </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecionApp />, document.getElementById('apptext'))