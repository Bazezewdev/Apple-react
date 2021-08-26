import React, { Component } from 'react';

class FooterLink extends Component {
    render() {
        return (
            <div>
                <li><a href={this.props.LinkUrl}>{this.props.LinkName}</a></li>
            </div>
        );
    }
}

export default FooterLink;
