import { useState  } from 'react';
import movies from './utils.json/movies.json'
import './index.css'
const Details = (props) => {

    return (
        <div >
     {movies.movies.map((post) => post.id==props.id? (
      <div>
      <section>
  <h3>{post.title}</h3>
 { post.posterUrl?<img src={post.posterUrl} style={{width:'400px',height:'450'}} />:
 <img src="./uwp1424066.jpeg" style={{width:'400px',height:'450'}} />}
  <p class="date">{post.year}</p>
  <p>{post.genres}</p>
  <a href="">{post.director}</a>
</section>
       
      </div>
      
     
     
     ):(<div></div>))}
    </div>
    );
};

export default Details;
