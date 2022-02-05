import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
    todos: []
  }
  constructor() {
    super()

    this.Time()
    this.getData()
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div>
            <h1>
              {this.state.time}
            </h1>

            {/* todoList */}
            <div>
              <ul className="todo-list">
                {this.state.todos.map(todo => (

                  <div>
                    <li>
                      user: {todo.userId}
                    </li>
                    <li>
                      id: {todo.id}
                    </li>
                    <li>
                      {todo.title}
                    </li>
                    <li>
                      state: {todo.completed ? 'completed' : 'not completed'}
                    </li>
                    <hr></hr>
                  </div>
                ))}
              </ul>


            </div>
          </div>
        </header>
      </div>
    )
  }

  getData() {

    let number = Math.floor(Math.random() * 10) + 1
    setInterval(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
      //get 5 random todos
      const random = Math.floor(Math.random() * response.data.length) + 1
      const todos = response.data.filter(todo => todo.id === random)

      // push to state
      this.state.todos.push(todos[0])
      this.setState({ todos: this.state.todos })
    }, 1000)
  }

  Time() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)
  }

}

export default App;
