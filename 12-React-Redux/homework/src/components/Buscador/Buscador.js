import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMovieFavorite, getMovies } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="label">Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btn">Buscar</button>
        </form>
        <ul>
         {
           this.props.movies && this.props.movies.map(movie =>(
             <div key={movie.imdbID} className="pelis">
                <Link to={`/movie/${movie.imdbID}`}>
                  <div className="pelis">
                    {movie.Title}
                    <button onClick={()=>this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}> Agregar </button>
                  </div>
                </Link>
             </div>
           ))
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.moviesLoaded
  }
}

function mapDispatchToProps(dispatch){
  return{
    getMovies: title => dispatch(getMovies(title)),
    addMovieFavorite: title => dispatch(addMovieFavorite(title))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Buscador);


// export default function Buscador({prop1, prop2}){
//   const [title, setTitle] = useState('');

//   let handleChange = (e) => {
//     setTitle(e.target.value);
//   }

//   let handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return(
//     <div>
//     <h2>Buscador</h2>
//     <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
//       <div>
//         <label className="label" htmlFor="title">Película: </label>
//         <input
//           type="text"
//           id="title"
//           autoComplete="off"
//           value={title}
//           onChange={(e) => this.handleChange(e)}
//         />
//       </div>
//       <button type="submit">BUSCAR</button>
//     </form>
//     <ul>
    
//     </ul>
//   </div>
//   )
// }
