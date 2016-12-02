   ____.gitignore
  |____components                     // 业务通用组件
  | |____Alert
  | |____Button
  |____containers                     // 对应业务路由模块
  | |____AppContainer.js
  | |____ChartContainer.js
  | |____MapContainer.js
  | |____TableContainer.js
  | |____UiContainer.js
  | |____zindex.js
  |____fis-conf.js                   // fis3 配置文件
  |____index.html                    // 项目入口文件
  |____map.json
  |____mock                          // 模拟请求数据文件,对应路由的每一个页面
  | |____ChartPage
  | | |____chart.json
  | |____MapPage
  | | |____a.json
  | |____uipage
  | | |____uipage.json
  |____package.json                 // 项目依赖
  |____pages                        // 项目主模块,对应不同的模块
  | |____ChartPage
  | |____HeaderPage
  | |____LeftNavPage
  | |____MainPage
  | |____MapPage  
  | |____UiPage
  |____public                      // 公共的资源和库
  | |____html
  | |____images
  | |____scripts
  | |____styles
  |____README.md                  // 说明
  |____routes                     // 路由模块
  | |____routes.js
  |____server.conf                // 本地开发测试，请求数据路由配置
  |____util                       // 同用的业务方法
  | |____api.js
