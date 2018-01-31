import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-default">
                    <a className="navbar-brand" >API</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Course</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
