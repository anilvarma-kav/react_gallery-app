import React, {Component} from "react";
import Image from "./Image";
import Notfound from "./Notfound";

class Results extends Component {
    render() {
        return (

            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    <Image />
                    <Notfound/>
                </ul>
            </div>
        );
    }
}

export default Results;