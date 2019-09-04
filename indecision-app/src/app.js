class Header extends React.Component {

    render(){
        
        return <p>This is from Header {this.props.name}</p>;
    }
}

class Action extends React.Component {
    render(){
        return <button onClick={this.sayHello(this.props.name)}>What can I do?</button>
    }

      sayHello(name) {
        console.log (name);
       
    }
}

const jsx =  (
    <div>
      <h1>Title</h1>
      <Header name ="Guven"/>
      <Action name = "GUven"/>
    </div>

)

ReactDOM.render(jsx, document.getElementById('apptext'))