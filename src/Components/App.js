import React, {Component} from 'react';
import Search from "./Search";
import Nav from "./Nav";
import Results from "./Results";
import apiKey from "../../src/config";
import {BrowserRouter } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flickrs: []
        };
    }
    componentDidMount() {
        this.doSearch();

    }
    doSearch = (query = 'animals') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({flickrs: response.data.photos.photo})
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }



    render() {
        console.log(apiKey);
        return (
            <BrowserRouter>
                <div className="container">
                    <Search searchTag={ this.doSearch}/>
                    <Nav />
                    <Results flickrs = {this.state.flickrs}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

