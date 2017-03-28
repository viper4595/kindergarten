import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import tabIcon from './components/TabIcon';
import FavouriteList from './components/FavouriteList';
import KindergartenList from './components/KindergartenList';
import Auth from './components/Auth';

const RouterComponent = () => {
    return (
        <Router >

            <Scene key="auth" unmountScenes>
                <Scene key="login" component={LoginForm} title="Login" hideNavBar="true" />
            </Scene>

            <Scene
                key="tabbar"
                tabs
                navigationBarStyle={{
                    borderBottomWidth: 0
                }}
                tabBarStyle={{
                    height: 60,
                    borderTop: 1.5,
                    borderColor: '#DDD',
                    backgroundColor: 'white'
                }}

            >
                <Scene
                    key="Home"
                    title="Tab #1"
                    icon={tabIcon}
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    titleStyle={{ color: 'white' }}
                    component={KindergartenList}
                    onRight={() => alert('Right button')}
                    rightTitle="Filter"
                />
                <Scene
                    key="Favourite"
                    title="Tab #2"
                    icon={tabIcon}
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    titleStyle={{ color: 'white' }}
                    component={FavouriteList}
                    onRight={() => alert('Right button')}
                    rightTitle="Filter"
                />
                <Scene
                    key="Logout"
                    title="Tab #3"
                    icon={tabIcon}
                    navigationBarStyle={{ backgroundColor: 'white' }}
                    titleStyle={{ color: 'white' }}
                    component={Auth}
                    onRight={() => alert('Right button')}
                    rightTitle="Filter"
                    unmountScenes
                />
            </Scene>
        </Router>
    );
};

console.disableYellowBox = true;
export default RouterComponent;
