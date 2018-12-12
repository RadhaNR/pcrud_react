import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import AllPets from './AllPets';
import AddPet from './AddPet';
import MyPets from './MyPets';

const Dashboard = ({ match }) => {

    return (
        <div className="">

            <div>
                <h2>Dashboard Content</h2>
                <ul className="">
                    <li>
                        <Link to={`${match.url}/pets`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/my-pets`}>My Pets</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/add-pet`}>Add Pet</Link>
                    </li>
                </ul>
                <div className="">
                    <Route path={`${match.path}/:content`} component={DashboardContent} />
                    <Route
                        exact
                        path={match.path}
                        component={AllPets}
                    />
                </div>

            </div>
        </div>
    )
}

const renderComp = (comp) => {
    console.log(comp)
    switch (comp) {
        case 'pets':
            return <AllPets />
        case 'add-pet':
            return <AddPet />
        case 'my-pets':
            return <MyPets />
        default:
            return <PageNotFound />
    }
}
export const DashboardContent = ({ match }) => (
    <div>
        {
            renderComp(match.params.content)
        }
    </div>
);

export default Dashboard;