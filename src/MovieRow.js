import React from 'react';
class MovieRow extends React.Component{
    viewMovie()
    {
        const url="https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href=url
    }
    render(){
        return(
            <div className="cards" key={this.props.movie.id}>
            <div className=" card">
                     <img alt="mypic" width="150" height="300" className="card_img" src ={this.props.movie.poster_src}/>
                      
                       <h3 className="card_title">{this.props.movie.title}</h3>
                       <p className="card_info" style={{paddingLeft:10}}>{this.props.movie.overview}</p>
                       <input className="button" type="button" onClick={this.viewMovie.bind(this)} value="MORE" />
        </div>
        </div>)
    }
    
}
export default MovieRow;