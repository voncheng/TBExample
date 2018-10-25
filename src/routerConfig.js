/**
 * 配置规则
 * routes: [] 路由
 * initializationTabs: [] 初始tabbar
 * path: 匹配路径
 * component: 匹配组件
 * indexRoute: 重定向 MatchCell
 * rediret: 重定向匹配路径
 * state: Location状态   注: 按需要内部可以添加任意多个值对
 * mark:  是否写入到浏览历史中 注: 此浏览记录只服务于业务并非bowserHistory
 * childRoutes: 子路由
 *checkAuthority: 需不需要做用户认证  默认为  true
 */
const routerConfig = {
  routes: [
    {
      path: "/",
      component: "App",
      indexRoute: { redirect: "/home" },
      childRoutes: [
        {
          path: "/home",
          component: "home",
          state: {
            mark: "首页",
          },
        },
      ],
    }, { // 异常页面
      path: "*",
      component: "exception/404",
      state: {
        checkAuthority: false,
      },
    },
  ],
  initializationTabs: [
    {
      pathname: "/home",
      state: {
        mark: "首页",
      },
    },
  ],
};
export default routerConfig;
