//Import all necessary modules
import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Search from "./Search";
import Nav from "./Nav";
import axios from "axios";
import apiKey from "../config";
import Results from "./Results";
import Loader from "./Loader";
import PageNotFound from "./PageNotFound";

//App Component
class App extends Component {
    constructor(props) {
        super(props);
        //default states of App Component
        this.state = {
            flickrs: [],
            fogPics: [],
            firePics: [],
            rainPics: [],
            tag: "",
            loading: true
        }
    }
    //Handle search based on the user input
handleSearch =(query = "fog") =>{
        this.setState({loading: true});
        //Axios Automatically transforms for JSON data
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&content_type&per_page=24&format=json&nojsoncallback=1`)
            .then(response => {
                if(query === "fog") {
                    this.setState({fogPics: response.data.photos.photo, loading: false});
                }
                else if(query === "fire") {
                    this.setState({firePics: response.data.photos.photo, loading: false})
                }
                else if(query === "rain") {
                    this.setState({rainPics: response.data.photos.photo,  loading: false})
                }
                else{
                    this.setState({
                        flickrs: response.data.photos.photo,
                        tag: query,
                        loading: false
                    })
                }

            })
            //Logging error if there is nay parse error to console
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }
    // call handle search when App component mounted
    componentDidMount() {
        this.handleSearch("fog");
        this.handleSearch("fire");
        this.handleSearch("rain");
    }
    // Redering the child elements of App component
    render() {
        return (
            <BrowserRouter>
                <Search handleSearch = {this.handleSearch}/>
                <Nav />
                <div className="container">
                <Switch>
                    <Route exact path='/' render = {() => <Redirect to='/fog'/>}/>
                    <Route exact path='/fog' render = {() =>
                        (this.state.loading)
                            ? <Loader />
                            : <Results tag="Fog" flickrs = {this.state.fogPics}/>}
                    />
                    <Route exact path='/fire' render = {() =>
                        (this.state.loading)
                            ? <Loader/>
                            : <Results tag="fire" flickrs = {this.state.firePics}/>
                    }/>
                    <Route exact path='/rain' render = {
                        () => (this.state.loading)
                            ? <Loader />
                            :<Results tag="Rain" flickrs = {this.state.rainPics}/>}/>
                    <Route exact path='/search/:tag' render = {() =>
                        (this.state.loading)
                            ? <Loader/>
                            :<Results tag={this.state.tag} flickrs = {this.state.flickrs}/>}/>
                    <Route component={PageNotFound}/>
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

