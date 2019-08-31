'use strict';
console.log("App running...");

// JSX Javascript XML

const user = {
    username : 'guvense',
    name: 'Guven',
    surname : 'Seckin',
    place : 'Istanbul',
    todo: ['wake', 'live','sleep']
}

const tempText= (
    <div>
        <h3>Welcome: {user.username ? user.username: 'undefined'}</h3>
        <ol>
        {getName(user)}
        <li><b>surname:</b> {user.surname}</li>
        <li><b>place:</b> {getLocation(user)}</li>
        <li><b>tasks: </b>{user.todo.length>0 ? user.todo.map(a=>a+', ' ): 'There is not any task'} </li>
        </ol>
    
    </div>
)

function getLocation(user) {
    if (user.place==null) {
        return 'unkown';
    } else {
        return user.place;
    }
}

 function getName (user) {
        if(user.name !=null){
            return (<li><b>name:</b>{user.name}</li>)
        }
    };

const appText= document.getElementById('apptext')
ReactDOM.render(tempText,appText);
