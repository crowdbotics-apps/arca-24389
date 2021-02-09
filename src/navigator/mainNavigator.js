import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings202654Navigator from '../features/Settings202654/navigator';
import UserProfile202647Navigator from '../features/UserProfile202647/navigator';
import Settings202646Navigator from '../features/Settings202646/navigator';
import Settings202644Navigator from '../features/Settings202644/navigator';
import SignIn2202642Navigator from '../features/SignIn2202642/navigator';
import Settings202581Navigator from '../features/Settings202581/navigator';
import UserProfile202574Navigator from '../features/UserProfile202574/navigator';
import Settings202573Navigator from '../features/Settings202573/navigator';
import Settings202571Navigator from '../features/Settings202571/navigator';
import SignIn2202569Navigator from '../features/SignIn2202569/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings202654: { screen: Settings202654Navigator },
UserProfile202647: { screen: UserProfile202647Navigator },
Settings202646: { screen: Settings202646Navigator },
Settings202644: { screen: Settings202644Navigator },
SignIn2202642: { screen: SignIn2202642Navigator },
Settings202581: { screen: Settings202581Navigator },
UserProfile202574: { screen: UserProfile202574Navigator },
Settings202573: { screen: Settings202573Navigator },
Settings202571: { screen: Settings202571Navigator },
SignIn2202569: { screen: SignIn2202569Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
