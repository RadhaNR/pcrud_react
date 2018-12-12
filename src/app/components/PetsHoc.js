import React, { Component } from 'react';
import axios from 'axios';

export default function PetHoc(WrappedComponent, input) {
    // return class HOC extend Component name of the component is options
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }
        componentDidMount() {
            // this.getData().then(response => {
            //     console.log(response)
            //     let data =  response.data;  
            //     this.setState({ data  });
            // });  
            this.setState({data: [{name: 'aaa', age: 123, place: 'AAA'}]})
            
        }
    
        // getData = () => {
        //     return new Promise((resolve, reject) => {
        //         axios.get(input.url).then(function (response) {
        //             resolve(response)
        //         }).catch(function (error) {
        //             reject(error)
        //         });
        //     });
        // }
        render() {
            return (
                <WrappedComponent list={this.state.data}/>
            );
        }
    }
}
