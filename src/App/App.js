import React, { Component } from 'react';
import Movie from '../Movie/Movie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMovieView: false,
      movie: {
        id: 539885,
        title: 'Ava',
        posterPath: 'https://image.tmdb.org/t/p/original//qzA87Wf4jo1h8JMk9GilyIYvwsA.jpg',
        backdropPath: 'https://image.tmdb.org/t/p/original//54yOImQgj8i85u9hxxnaIQBRUuo.jpg',
        releaseDate: '2020-07-02',
        overview: 'A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.',
        genres: [
          'Action',
          'Crime',
          'Drama',
          'Thriller'
        ],
        budget: 0,
        revenue: 152812,
        runtime: 96,
        tagline: 'Kill. Or be killed.',
        averageRating: 5.875
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.isMovieView && <Movie movieDetails={this.state.movie}/>}
      </div>
    );
  }
}

export default App;