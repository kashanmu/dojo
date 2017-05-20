import React, { Component } from 'react';
import Axios from 'axios';

class StarWars extends Component {
      constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {starwar: false, message: "Loading..."}
    }

  render() {
        if(this.state.starwar){
            return (
                <div>
                    <p><h1>Episode {this.state.starwar.episode_id}: {this.state.starwar.title}</h1>
                    <h3>{this.state.starwar.opening_crawl}</h3></p>
                    
                </div>
            )
        } else {
            return <h1>{this.state.message}</h1>
        }
    }



     componentDidMount(){
       Axios.get(" http://swapi.co/api/films/" + this.props.id, {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            this.setState({
                starwar: result.data,
                message: ""
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log('Request canceled', err.message);
            } else {
                this.setState({
                    message: `Pokemon with ID "${this.props.id}" not found`
                })
            }
        })
    }

     componentWillUnmount(){
        this.cancelToken.cancel("Operation canceled by the user");
    }


}
export default StarWars;