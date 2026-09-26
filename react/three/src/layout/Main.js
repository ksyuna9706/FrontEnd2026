import React from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import "./Main.css";

class Main extends React.Component {
    state = {
        movies: [],
        loading:true,
        count:0
    }

    componentDidMount() {
        fetch("https://www.omdbapi.com/?apikey=4295d3bb&s=matrix").then(response => response.json()).then(data => this.setState({ movies:data.Search,loading:false,count:data.totalResults}))
    }
    searchMovie =(str,type="all",page)=> {
        this.setState({loading:true})
        fetch(`https://www.omdbapi.com/?apikey=4295d3bb&s=${str}${type!=="all"?`&type=${type}`:""}${`&page=${page}`}`).then(response => response.json()).then(data => this.setState({ movies:data.Search,loading:false,count:data.totalResults}))
    }

    render() {
        const {movies,loading,count} = this.state;
// console.log(movies);

        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie ={this.searchMovie} totalCount={count}/>
                    {
                        loading ?<Preloader />  : <MovieList movies={movies}/>
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