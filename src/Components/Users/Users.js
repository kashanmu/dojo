import React, { Component } from 'react';
import Axios from 'axios';
import "./Users.css";

class Users extends Component {
      constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {users: false, message: "Loading..."}
    }

  render() {
        if(this.state.users){

            let usersListRows = this.state.users.map( (el) => {
                return(
                    <tr> <td className="rowStyle">{el.username} </td>
                    <td className="rowStyle"> {el.createdAt} </td>
                    </tr>
                )

            }
            );


            return (
                <div>
                    <table className="tableStyle">
                        <tr><th className="rowStyle"> Username </th> <th className="rowStyle"> Created At </th> </tr>
                        {usersListRows}
                    </table>
                </div>
            )
        } else {
            return <h1>{this.state.message}</h1>
        }
    }



     componentDidMount(){
       Axios.get(" http://54.245.42.196/users" , {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            console.log(result.data[0]);
            this.setState({
                users: result.data,
                message: ""
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log('Request canceled', err.message);
            } else {
                this.setState({
                    message: `Users not found`
                })
            }
        })
    }


     componentWillUnmount(){
        this.cancelToken.cancel("Operation canceled by the user");
    }


}
export default Users;