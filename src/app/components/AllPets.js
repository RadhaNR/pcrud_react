import React, { Component } from 'react';
import Pet from './Pet';
import axios from 'axios';
import PetHoc from './PetsHoc';

class AllPets extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Pet petList={this.props.list} />
            </div>
        )
    }
}
AllPets = PetHoc(AllPets, { url: 'url' });

export default AllPets;