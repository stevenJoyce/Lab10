import React from 'react';
import Axios from 'axios';

class Edit extends React.Component {

constructor(props){
  super(props);

  this.state = {Title:'',
                  Year:'',
                Poster:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
    this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
    this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
  }

handleMovieTitleChange(e){
  this.setState({Title: e.target.value});
}

handleMovieYearChange(e){
  this.setState({Year: e.target.value});
}

handleMoviePosterChange(e){
  this.setState({Poster: e.target.value});
}
handleSubmit(e){
  alert(this.state.Title+ "      " + this.state.Year 
  +"       "+ this.state.Poster);
  e.preventDefault();
  
              this.setState({Title:'',
              Year:'',
            Poster:''});    
  
 }//class       
componentDidMount(){
alert(this.props.match.params.id)
Axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
.then((response)=>{
  this.setState({
    _id:response.data._id,
    Title:response.data.title,
    Year:response.data.year,
    Poster:response.data.poster
  });
})  
.catch();
}

  render(){
    return (
      <div className="App">
        <h1> Hello from Edit Component </h1>
        <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Movie Title</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Title}
          onChange={this.handleMovieTitleChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Movie Year</label>
          <input
          type='text'
          className='form-control'
          value={this.state.Year}
          onChange={this.handleMovieYearChange}
          ></input>
        </div>
        <div className='form-group'>
          <label>Movie Poster Url</label>
          <textarea
          row='3'
          className='form-control'
          value={this.state.Poster}
          onChange={this.handleMoviePosterChange}
          ></textarea>
        </div>
        <div>
          <input
          type="submit"
          value="Update Movie">
          </input>
        </div>
        </form>
      </div>
    );
  }
  
}

export default Edit;