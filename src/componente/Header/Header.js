import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.LinkUrl}>{this.props.LinkName}</a></li>
            
        );
    }
}

export default Header;
