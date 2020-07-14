import React, { Component } from 'react';
// import axios from 'axios';
import Gallery from "react-photo-gallery";
import { photos } from "../../assets/statics/photos";

class GalleryComp extends Component {
    render() {
        return (
            <div id={'imageGallery'}>
                <Gallery photos={photos} />
            </div>
        );
    }
}

export default GalleryComp;