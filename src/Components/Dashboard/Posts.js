import React, { Component } from 'react';
import Axios from 'axios';
import "./Posts.css";
import PostItems from "./PostItems.js";

class Posts extends Component {
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {posts: "", newpost: "", message: "", success: "", errors: ""}
    }

render(){
        if(this.state.posts){

            let postListRows = this.state.posts.map( (el) => {
                return(
                    <PostItems id={el._id} createdAt={el.createdAt.split('T')[0]} post={el.post} author={el._author.username} userid={this.props.userid}/>

                )

            }
            );


               return (
                <div>
                              <div padding="5px" className="container">
                    <form onSubmit={this.registerpost}>
                        <label>New Post</label>
                        <textarea 
                             className="form-control" 
                            name="newpost" 
                            onChange={this.handleChange}
                            value={this.state.newpost} 
                        />
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </form>
                </div>
                    <div>
                        {postListRows}

                    </div>
                </div>
            )
        } else {
            return <h1>Error</h1>
        }
    }

    getPost = () => {
           Axios.get(" http://54.245.42.196/posts/"+this.props.userid , 
       {headers: {Authorization:localStorage.getItem("jw-token")} },
       {
            cancelToken: this.cancelToken.token
        }).then((result) => {
            console.log(result.data.posts);
            this.setState({
                posts: result.data.posts,
                errors:"",
                newpost:"",
                message: ""
            })
        }).catch((err) => {
            if (Axios.isCancel(err)) {
                console.log('Request canceled', err.message);
            } else {
                this.setState({
                    message: `Posts not found`
                })
            }
        })
    }

    componentDidMount(){
        this.getPost();
    }


     componentWillUnmount(){
        this.cancelToken.cancel("Operation canceled by the user");
    }


 
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerpost = (e) => {
        e.preventDefault();
        Axios({
            method: "post",
            url: "http://54.245.42.196/posts/create",
            headers: {Authorization:localStorage.getItem("jw-token")} ,
            data: { post: this.state.newpost, user_id: this.props.userid}
        }).then((result) => {
            this.setState({success: "Success message-"+result.data.message});
           // console.log(result.data.user.username+":"+result.data.message);
            console.log(result);
            this.getPost();


        }).catch((err) => {
            console.log(err);
    //        this.setState({errors: err.response.data.errors})
        })
    } 

}
export default Posts;