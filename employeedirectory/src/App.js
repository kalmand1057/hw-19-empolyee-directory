import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Card from "./components/Card/Card";
import Dropdown from "./components/Dropdown/Dropdown";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbotron />
        <Dropdown />
        <Wrapper>
          {this.state.employees.map(employee => (
            <Card
              removeEmployee={this.removeEmployee}
              id={employee.id}
              key={employee.id}
              image={employee.image}
              name={employee.name}
              title={employee.title}
              email={employee.email}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="container">
//       <Jumbotron />
//       <Dropdown />
//       <Card />
//     </div>
//   );
// }

export default App;
