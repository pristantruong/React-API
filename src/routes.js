import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: true,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: true,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: true,
        main: ({match}) => <ProductActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
];

export default routes;