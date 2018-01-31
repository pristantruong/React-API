import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <button type="button" className="btn btn-info mb-10">Add</button>

                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">List Course</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>NodeJS</td>
                                                <td>500</td>
                                                <td>
                                                    <span className="label label-success">Active</span>
                                                </td>
                                                <td>
                                                    
                                                    <button type="button" className="btn btn-info mr-10 btn-xs">Edit</button>
                                                    
                                                    <button type="button" className="btn btn-danger btn-xs">Delete</button>
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default App;
