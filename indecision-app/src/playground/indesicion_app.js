class Indesicion extends React.Component {
  constructor(props) {
    super(props);
    this.deleteAllTask = this.deleteAllTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      taskList: []
    };
  }

  deleteAllTask() {
    this.setState(() => {
      return {
        taskList: []
      };
    });
  }

  addTask(value) {
    this.setState(preventDefault => {
      return {
        taskList: preventDefault.taskList.concat(value)
      };
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Information />
        <UserInfo username="guven" />
        <AddDummyTask handlerDummyTaskAdders={this.addTask} />
        <TaskList taskList={this.state.taskList} />
        <AddTask handlerTaskAdding={this.addTask} />
        <DeleteAllTask handlerDeleteTask={this.deleteAllTask} />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return <h1>Welcome to task management</h1>;
  }
}

// const Information = (props) => {
//   return (<p>App Owner: {props.ownerName}</p>);
// };

class Information extends React.Component {
  render() {
    return <p>App Owner: {this.props.ownerName}</p>;
  }
}

Information.defaultProps = {
  ownerName: "Kral Guven"
};

class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.taskList.map(o => <Task value={o} />);
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    const val = e.target.elements.taskName.value;
    e.target.elements.taskName.value = "";

    this.props.handlerTaskAdding(val);
  }

  render() {
    return (
      <form onSubmit={this.addTask}>
        <input type="text" name="taskName" />
        <button>Add task</button>
      </form>
    );
  }
}

class DeleteAllTask extends React.Component {
  render() {
    return (
      <button onClick={this.props.handlerDeleteTask}>Delete All Tasks</button>
    );
  }
}

class AddDummyTask extends React.Component {
  constructor(props) {
    super(props);
   // this.addDummyTasks=this.addDummyTasks.bind(this)
    this.addDummyTasks= () => {
        for (let index = 0; index < 10; index++) {
    
          this.props.handlerDummyTaskAdders(index);
        }
  }


  };

  render() {
    return <button onClick={this.addDummyTasks}>Add Dummy</button>;
  }
}

const UserInfo = props => {
  return (
    <div>
      <p>Username: {props.username}</p>
    </div>
  );
};
ReactDOM.render(<Indesicion />, document.getElementById("apptext"));
