import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'

class App extends Component(){
  render(){
    return(
          <SearchBar />
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
