import React, { Component } from 'react';
import Axios from 'axios';
import "./Posts.css";

class PostItems extends Component {
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {message: "", success: "", errors: ""}
    }

destroyPost = (e) => {
    console.log ("http://54.245.42.196/posts/"+e.target.id+"/destroy");
    console.log(this.props.userid );

       e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/posts/"+e.target.id+"/destroy",
            headers: {Authorization:localStorage.getItem("jw-token")} ,
            data: {user_id: this.props.userid}
        }).then((result) => {
            console.log(result);
            this.setState({errors: ""})
        }).catch((err) => {
            console.log(err);
         })


}


render(){
    return(
        <div>
            <h3>Author: {this.props.author} | Created At: {this.props.createdAt}</h3>
            <div>
                {this.props.post}
            </div>
            {this.props.author===localStorage.username&&
                    <input id={this.props.id} className="btn-secondary" type="button" value="Delete Post" onClick={this.destroyPost}/>
            }
 
            <hr />
        </div>
    )
}
}

export default PostItems;