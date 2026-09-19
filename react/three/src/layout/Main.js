import React from "react";
import MovieList from "../components/MovieList";
import "./Main.css";

class Main extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=4295d3bb&s=matrix").then(response => response.json()).then(data => this.setState({ movies:data.Search}))
    }

    render() {
        const {movies} = this.state;
// console.log(movies);

        return (
            <div className="main">
                <div className="wrap">
                    {
                        movies.length ? <MovieList movies={movies}/> : <h3>Loading...</h3>
                    }
                    
                </div>
            </div>


        )
    }
}
export default Main;

// import React from "react";
// import MovieList from "../components/MovieList";
// import './Main.css';
 
// class Main extends React.Component{
//     state = {
//         movies: []
//     }
 
//     componentDidMount(){
//         fetch("https://www.omdbapi.com/?apikey=4eb9d7fd&s=matrix")
//             .then(response => response.json())
//             .then(data => this.setState({movies: data.Search}))
//     }
 
//     render(){
//         const {movies} = this.state;
//         console.log(movies);
       
       
//         return (
//             <div className="main">
//                 <div className="wrap">
//                     {
//                         movies.length ? <MovieList movies={movies} /> : <h3>Loading...</h3>
//                     }                    
//                 </div>
//             </div>
//         )
//     }
// }
 
// export default Main;