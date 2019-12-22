import React, {Component} from "react";
import Image from "./Image";
import Notfound from "./Notfound";

class Results extends Component {

    render() {
        const results = this.props.flickrs;
        const tag = this.props.tag;
        let images;
        if (results.length) {
            images = results.map(image => {
                let url = `http://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
                return (<Image url= {url} key={image.id} />);
            });
        } else {
            images = <Notfound />
        }

        return (

            <div className="photo-container">
                {(tag.length)? <h2>Search Results for: {this.props.tag}</h2> : ''}
                <ul>
                    {images}
                </ul>
            </div>
        );
    }
}

export default Results;