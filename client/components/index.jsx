import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={styles.app}>Welcome</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;

