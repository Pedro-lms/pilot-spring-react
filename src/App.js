import { Component } from 'react';
import './App.css';
import {getAllStudents} from './client';

class App extends Component {

  state = {
    students: []
  }

  componentDidMount () {
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents()
    .then(res => res.json()
    .then(students => {
      console.log(students);
      this.setState({
        students
      });
    }));
  }

  render () {
    getAllStudents().then(res => res.json().then(students => {
      console.log(students);
    }));
    return <h1> Beggining </h1>
  }
}

export default App;
