/**
 * Author: Anil Varma Keerthipati
 * Project: React-Gallery-App
 */
import React from "react";

// Image Component
const Image = (props) => {
    return (
        <li>
        <img src={props.url} alt=""/>
        </li>
    )
}
export default Image;