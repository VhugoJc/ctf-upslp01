import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import LayoutBasic from '../layouts/LayoutBasic';

const routes =[
    {
        path: "/",//Basic,
        component: LayoutBasic,
      exact: false,
      routes: [
          {
          path: "/",
          component: SignUp,
          exact: true
        },{
            path: "/home",
            component: Home,
            exact: true
        }
        ]
    }
];
export default routes;