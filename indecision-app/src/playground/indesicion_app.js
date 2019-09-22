

class Indesicion extends React.Component {
    constructor(props){
        super(props)
        this.deleteAllTask=this.deleteAllTask.bind(this)
        this.addTask=this.addTask.bind(this)
        this.state= {
            taskList: ['first']
        }
    }

    deleteAllTask(){
        this.setState(()=>{
            return{
            taskList: []
            }
        })
    }

    addTask(value){
        this.setState((preventDefault)=>{
          
            return {
                taskList: preventDefault.taskList.concat(value)
            }
        })
    }


    render(){
        return(
            <div>
            <Header/>
            <TaskList taskList={this.state.taskList}/>
            <AddTask handlerTaskAdding={this.addTask} />
            <DeleteAllTask handlerDeleteTask={this.deleteAllTask}/>
            </div>
        )

    }
}


class Header extends React.Component {
    render(){

        return(
            <h1>Welcome to task management</h1>
        )
    }
}

class TaskList extends React.Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            this.props.taskList.map((o)=><Task value={o}/>)
        )
    }



}

class Task extends React.Component {

    constructor(props){
        super(props)

    }

    render(){
        return(
            <p>{this.props.value}</p>
        )
    }
}



class AddTask extends React.Component {
    constructor(props){
        super(props)
        this.addTask=this.addTask.bind(this)
    }



    addTask(e){
        e.preventDefault();
        const val= e.target.elements.taskName.value

        this.props.handlerTaskAdding(val)
        
        

    }


    render(){
        return(
            <form onSubmit= {this.addTask}>
            <input type="text" name= "taskName"/>
            <button>Add task</button>
            
            </form>
        )
    }

}


class DeleteAllTask extends React.Component {


render(){
    return(
        <button onClick= {this.props.handlerDeleteTask}>Delete All Tasks</button>
    )
}


}

ReactDOM.render(<Indesicion />, document.getElementById('apptext'))