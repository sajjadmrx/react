import logo from './logo.svg';
import './App.css';
import react from 'react';
import React from 'react';
import UserCard from './components/userCard.component';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const users = [{
  name: 'John Doe',
  email: 'test@gmail.com'
}, {
  name: 'will smith',
  email: 'test2@gmail.com'
}]
class App extends React.Component {

  render() {
    // let x = users.map(user => {
    //   return <UserCard name={user.name} email={user.email} />
    // })
    //
    return (
      <div className="App">
        <x className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* {x} */}

          <UserCard name={users[0].name} email={users[0].email} />
        </x>
      </div>
    );
  }
}


export default App;
