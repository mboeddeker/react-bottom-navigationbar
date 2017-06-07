import React, { Component } from 'react';
import './ag-blogpost.css';



class AGBlogPost extends Component {

    constructor(props){
        super(props);
        this.postID = props.match.params.id;
        this.state = {
            postHeadLine: "",
            postContent: "",
            postImage: ""
        }

        this.getPostData = this.getPostData.bind(this);

        console.log(this);
    }

    componentWillMount(){
        this.getPostData();
    }

    

    //GET POST DATA
    getPostData(){
        
      fetch('http://localhost:3005/posts/' + this.postID)
      .then((response) => response.json()).then((data) => {
        console.log(data);
        this.setState({
            postHeadLine: data.headline,
            postContent: data.content,
            postImage: data.image
        })
      });
    
    }


    render(){
        return(
            <div className="ag-blogpostwrapper">
                <button 
                className="close-button"
                onClick={()=>{this.props.history.goBack();}}/>
                <img src={'https://media.giphy.com/media/pelIVbzAEpQrK/giphy.gif'} alt="" className="ag-blogpostImage"/>
                <h1 className="ag-blogpostHeadline">{'Headline'}</h1>
                <p className="ag-blogpostContent">
                    {'Hi'}
                </p>
            </div>
        );
    }

}


export default AGBlogPost;