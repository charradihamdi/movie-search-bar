import { useState,createContext  } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from './Details';
import './App.css';
import Search from './search';
import { Container, Row, Col } from 'react-bootstrap'; 
import movie from './utils.json/movies.json'


const  filterMovie = (mov, query) => {
    if (!query) {
        return mov;
    }

    return mov.filter((mov) => {
        
        const postName = mov.title.toLowerCase();
        return postName.includes(query);
    });
};

const App = () => {
   
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterMovie(movie.movies, searchQuery);
    const [idFilm,setIdFilm]=useState()
    
    return (
        <Router>
              <Container fluid>
              <Row>
              <Col md={10} className="sidebar">
                <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <ul>
                    {filteredPosts.map((post) => (<li onClick={(e)=>{setIdFilm(e.target.value)}} value={post.id} key={post.id}>{post.title}</li> ))}
                </ul>
            </Col>
            <Col md={8} style={{ marginLeft: '18rem', paddingTop: '60px' }}> <Details id={idFilm} /></Col>
           
            </Row>
            </Container>
        </Router>
    );
};

export default App;
