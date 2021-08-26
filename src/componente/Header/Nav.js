import React, { Component } from 'react';
import Header from './Header';
import logo from '../../common/images/icons/logo-sm.png'
import search from '../../common/images/icons/search-icon-sm.png'
import cart from '../../common/images/icons/cart-sm.png'
class Nav extends Component {
    render() {
        return (
            <div>
                          	{/* <!-- Header navigation --> */}
	<div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand mx-auto" href="/"><img src={logo}/></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
                        <Header LinkName="mac" LinkUrl="mac"/>
                        <Header LinkName="iphone" LinkUrl="iphone"/>
                        <Header LinkName="ipad" LinkUrl="ipad"/>
                        <Header LinkName="wacth" LinkUrl="wacth"/>
                        <Header LinkName="tv" LinkUrl="tv"/>
                        <Header LinkName="music" LinkUrl="music"/>
                        <Header LinkName="support" LinkUrl="support"/>

						
						<li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
						<li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
			        </ul>
			    </div>
			</nav>
		</div>
	</div>

            </div>
        );
    }
}

export default Nav;
