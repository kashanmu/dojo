import React, { Component } from 'react';
import Axios from 'axios';

class Poke extends Component {
      constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {pokemon: false, message: "Loading..."}
    }

  render() {
        if(this.state.pokemon){
            return (
                <div>
                    <h1>{this.state.pokemon.name}</h1>
                    <img src={this.state.pokemon.sprites.front_shiny} alt="" />
                </div>
            )
        } else {
            return <h1>{this.state.message}</h1>
        }
    }

    //  componentDidMount(){
    //     Axios.get("http://pokeapi.co/api/v2/pokemon/" + this.props.id)
    //         .then((result) => {
    //             this.setState({
    //                 pokemon: result.data
    //             })
    //         }).catch((err) => {
    //             this.setState({
    //                 message: `Pokemon with ID '${this.props.id}' not found`
    //             })
    //         })
    // }

     componentDidMount(){
        Axios.get("http://pokeapi.co/api/v2/pokemon/" + this.props.id, {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            this.setState({
                pokemon: result.data,
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
export default Poke