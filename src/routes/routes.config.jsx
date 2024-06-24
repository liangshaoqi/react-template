import { RouteObject } from "react-router-dom";
import PageA from '../pages/pageA'
import PageB from '../pages/pageB'


// 纯路由管理
const routes = [
  {
    path: "/pageA",
    element: <PageA></PageA>,
  },
  {
    path: "/pageB",
    element: <PageB></PageB>,
  },
];

export default routes;
