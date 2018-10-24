import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCAfItybV7pSzxmwTj5wyG5SErMs5HYlRQ';

YTSearch({key: API_KEY, term: 'internet of things'}, (videos) => {
  this.SetState({videos});
});

class App extends Component(){
  render(){
    return(
          <SearchBar />
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
