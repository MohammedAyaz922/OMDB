import React from 'react';
import './MovieList.css'

const MovieList = (props) => {

    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container  justify-content-start m-3 image'>
                    <div className='row col-md-12 d-flex col-xs-12 moviePoster'>
                        <img src={movie.Poster} className="imgContainer" alt='movie'></img>
                        <div
                            className='overlay d-flex align-items-center justify-content-center'
                        >
                            <p>{movie.Title} {movie.Year}</p>
                        </div>
                    </div>
                    <br />
                    <div className='row col-md-12 col-xs-12 contain'>
                        <button
                        className="btnStyle"
                        type="submit">
                            click here
                        </button>
                </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;