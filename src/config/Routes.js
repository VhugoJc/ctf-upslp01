
import Home from '../pages/Home';
import Source from '../pages/Source';
import Default from '../pages/Default';

import LayoutBasic from '../layouts/LayoutBasic';

const routes =[
    {
        path: "/",//Basic,
        component: LayoutBasic,
      exact: false,
      routes: [
         {
            path: "/",
            component: Home,
            exact: true
        },{
            path: "/gettheflag",
            component: Source,
            exact: true
        },{
            path: "/get-the-flag",
            component: Source,
            exact: true
        },{
            component: Default
        }
        ]
    }
];
export default routes;