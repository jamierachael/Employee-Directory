import React from 'react';


export default class SearchBar extends React.Component {





    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
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


// {this.props.employees.name.filter(function (name) {

//     < tr >
//         <th scope="row"></th>

//         <td>
//             <img
//                 src={name.picture.medium}
//                 alt='employee'
//             />
//         </td>
//         {/* onClick for sort? */}
//         <td>{name.name[0].first} {name.name[0].last}</td>
//         <td>{name.phone}</td>
//         <td>{name.email}</td>
//         <td>{name.dob.date}</td>
//     </tr>


// })}