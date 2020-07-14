import React, { Component } from 'react';
// import axios from 'axios';
import Gallery from "react-photo-gallery";
import { photos } from "../../assets/statics/photos";

class GalleryComp extends Component {
    render() {
        return (
            <Gallery photos={photos} />
        );
    }
}

export default GalleryComp;