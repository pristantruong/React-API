import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Do you want Delete???')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var {product, index} = this.props;
        var statusName = product.status ? 'Active' : 'Invisible';
        var statusClass = product.status ? 'success' : 'warning';
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link 
                        to={`/product/${product.id}/edit`}
                        className="btn btn-info mr-10 btn-xs"

                    >Edit
                    </Link>
                    <button 
                        type="button" 
                        className="btn btn-danger btn-xs"
                        onClick={() => this.onDelete(product.id)}
                    >Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
