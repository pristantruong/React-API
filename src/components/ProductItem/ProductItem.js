import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
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
        );
    }
}

export default ProductItem;
