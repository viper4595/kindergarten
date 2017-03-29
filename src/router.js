import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
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
                    borderColor: '#DDD',
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
                    selected='false'
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
                    unmountScene
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
            </Scene>
        </Router>
    );
};

console.disableYellowBox = true;
export default RouterComponent;
