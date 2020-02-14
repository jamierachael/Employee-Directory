import React from 'react';
// import axios from "axios";
// import API from "../util/API";

export default class SearchBar extends React.Component {

    // state = {
    //     search: "",
    //     employees: []
    // };


    // handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     this.setState(
    //         {
    //             [name]: value
    //         }
    //     )
    // }

    // handleInputSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(this.state);
    //     const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

    //     axios.get(BASEURL).then((response) => {
    //         console.log(response);
    //         // response.data.name;
    //         this.setState(
    //             {
    //                 employees: response.data.name
    //             }
    //         )

    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }




    render() {
        return (
            <div>
                {/* <form onSubmit={this.handleInputSubmit}> */}
                <form onSubmit={this.props.handleInputSubmit}>
                    <input
                        name="search"
                        value={this.props.search}
                        onChange={this.props.handleInputChange}>

                    </input>
                    <button>
                        Search
                    </button>
                </form>
            </div>
        )
    };
}