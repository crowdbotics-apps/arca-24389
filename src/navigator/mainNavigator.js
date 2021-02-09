import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
