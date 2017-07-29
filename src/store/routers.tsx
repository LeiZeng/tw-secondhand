import * as React from 'react';
import { Route } from 'react-router';

import HomePage from '../containers/pages/Home/HomePage';
import AboutUsPage from '../containers/pages/AboutUs/AboutUsPage';
import {Product} from '../components/product/Product';

const router = (
    <div>
        <Route exact={true} path="/" component={HomePage}/>
        <Route path="/about-us" component={AboutUsPage}/>
        <Route path="/product" component={Product}/>
    </div>
);

export default router;
