import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import tabIcon from './components/TabIcon';
import Auth from './components/Auth';
import SplashScreen from './components/SplashScreen';
import FavouriteList from './components/Favourite/FavouriteList';
import KindergartenList from './components/Data/KindergartenList';

const RouterComponent = () => {

    return (
        <Router >
            <Scene key="intro" title="Login">
                <Scene key="splash" component={SplashScreen} title="Login" hideNavBar="true" />
            </Scene>

            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Login" hideNavBar="true" />
            </Scene>

            <Scene key="tabbar" tabs
                tabBarStyle={{
                    height: 60,
                    borderTop: 1.5,
                    borderColor: '#DDD'
                }}

            >
                <Scene
                    key="Home"
                    title="Tab #1"
                    icon={tabIcon}
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    titleStyle={{ color: 'white' }}
                    component={KindergartenList}
                    onRight={() => { alert('Filter by last updated'); Actions.filterHome(); }}
                    rightTitle="Filter"
                    selected='false'
                    hideBackImage
                />
                <Scene
                    key="Favourite"
                    title="Tab #2"
                    icon={tabIcon}
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    titleStyle={{ color: 'white' }}
                    component={FavouriteList}
                    onRight={() => Actions.filterFavourite()}
                    rightTitle="Filter"
                    leftTitle="Return"
                    onLeft={() => Actions.Home()}
                />
                <Scene
                    key="Logout"
                    title="Tab #3"
                    icon={tabIcon}
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    titleStyle={{ color: 'white' }}
                    component={Auth}
                    rightTitle="Filter"
                    unmountScenes
                />

                <Scene
                    key="filterHome"
                    title="Filter by last updated"
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    component={KindergartenList}
                    leftTitle="Return"
                    onLeft={() => Actions.Home()}
                    unmountScenes
                />

                <Scene
                    key="filterFavourite"
                    title="Filter by last updated"
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    component={FavouriteList}
                    leftTitle="Return"
                    onLeft={() => Actions.Home()}
                    unmountScenes
                />
            </Scene>
        </Router>
    );
};

console.disableYellowBox = true;
export default RouterComponent;
