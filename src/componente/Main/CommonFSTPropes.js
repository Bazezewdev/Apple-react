import React, { Component } from 'react';

class CommonFSTPropes extends Component {
    render() {
        return (
            <div>
                <div className="container">

<div className="new-alert">
   {this.props.New}
</div>

<div className="title-wraper bold black">
    {this.props.titleWrapper} 
</div> 

<div className="description-wrapper black">
{this.props.descriptionWrapper} 
</div>

<div className="price-wrapper grey">
    {this.props.priceWrapper}
</div>
</div>
            </div>
        );
    }
}

export default CommonFSTPropes;
