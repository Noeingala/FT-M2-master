import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="label">Películas Favoritas</h2>
        <ul>
          {
            this.props.movies && this.props.movies.map(movie =>(
              <div key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                  <span className="pelis">{movie.title}</span>
                </Link>
                <button onClick={()=>this.props.removeMovieFavorite(movie.id)}> Borrar </button>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    movies : state.moviesFavorites
  }
}

function mapDispatchToProps(dispatch){
  return{
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
