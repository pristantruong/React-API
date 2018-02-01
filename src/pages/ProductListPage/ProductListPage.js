import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
       this.props.fectchAllProducts();
    }

    onDelete = (id) => {
        // var { products } = this.state; //do sử dụng redux 
        // callApi(`products/${id}`, 'DELETE', null).then(res => {
        //     if (res.status === 200) { //0K
        //         var index = this.findIndex(products, id);
        //         if (index !== -1) {
        //             products.splice(index, 1);
        //             this.setState({
        //                 products: products
        //             })
        //         }
        //     }
        // })
        this.props.onDeleteProduct(id);
    }


    showProduct = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            })
        }
        return result;
    }

    render() {
        // var {products} = this.props;
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/add" className="btn btn-info mb-10">Add</Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fectchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
