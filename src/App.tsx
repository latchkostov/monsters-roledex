import React, {Component} from 'react';
import './App.css';

import { AppState } from './app.state';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      monsters: [
      ],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({monsters: users})
      });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster: any) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <SearchBox 
          placeHolder='search monsters'
          handleChange={
            (searchValue) => this.handleSearchBoxState(searchValue)
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  handleSearchBoxState(value: string) {
    this.setState({searchField: value})
  }
}

export default App;
