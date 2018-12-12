import React, { Component } from 'react';
import Pet from './Pet';
import axios from 'axios';
import PetHoc from './PetsHoc';

class MyPets extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div>
                <Pet petList={this.props.list} />
            </div>
        )
    }
}
MyPets = PetHoc(MyPets, { url: 'url' });

export default MyPets;