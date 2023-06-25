import { HeaderOnly } from '~/layouts';
import Home from '~/pages/Home';
import Login from '~/pages/Auth/login.js'
import config from '~/config';

// Layouts


// Pages

// import Following from '~/pages/Following';
// import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
// import Search from '~/pages/Search';
// import Live from '~/pages/Live';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.Login, component: Login},
    // { path: config.routes.following, component: Following },
    // { path: config.routes.live, component: Live },
    // { path: config.routes.profile, component: Profile },
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    // { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
