import React, {Component} from 'react';
import BlogItem from './ag-blogItem';
import { Link } from 'react-router-dom';
import './ag-blog.css';
import './spinner.css';

class AGBlog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogData: {}
    }

    this.getBlogData = this.getBlogData.bind(this);
  }

  componentWillMount() {
    this.getBlogData();
  }

  getBlogData() {

    setTimeout(() => {
      fetch('http://localhost:3005/db').then((response) => response.json()).then((data) => {
        
        this.setState({blogData: data})
      });
    }, 50)
  }

  

  render() {
    return (
      <div className="ag-blog-wrapper">
        {this.state.blogData.posts !== undefined
          ? (   
            <div>
              {this.state.blogData.posts.map((post) => 
                  <Link to={'/blog/'+ post.id} key={post.id}>
                      <div>
                        <BlogItem
                          headline={post.headline}
                          image={post.image}
                          content={post.content}/>
                      </div>
                  </Link>
                )
              } 
            </div>
            ) : (
            <div className="spin-wrapper">
              <div className="spinner"></div>
            </div>
          )
}
        <br/><br/><br/><br/>

      </div>
    );
  }

}

export default AGBlog;

//https://github.com/typicode/json-server
