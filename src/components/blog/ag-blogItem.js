import React, {Component} from 'react';
import ellipsis from 'text-ellipsis';
import PropTypes from 'prop-types';
import './ag-blog.css';

class AGBlogItem extends Component {

  constructor(props) {
    super(props);

    this.shortText = this.props.headline;
    this.imageSrc = this.props.image;
    this.contentText = this.props.content;
  }

  render() {
    var short = ellipsis( this.contentText, 200);
    return (
      <div className="ag-blog-card">
        <img className="ag-cardImage" src={this.imageSrc} alt=""/>
        <h3 className="ag-cardHead">{this.shortText}</h3>
        <p className="ag-cardContent">{short}</p>
      </div>
    );
  }

}

AGBlogItem.prototypes = {
    headline: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string
}

export default AGBlogItem;