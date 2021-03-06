# easy-boilerplate

前端项目基本初始环境模板，用于即时项目开发，可自动化编译生成发布（基于SSINC浏览）  

> Author: Serifx Xiao &lt;Serifx@outlook.com&gt;  
> CreateDate: 2015/12/11  
> Update: 2016/4/25  
> Version: 2.0.0  

> Licensed under the MIT license  

## 项目发布及浏览说明

采用服务器端包含模块功能进行模块嵌套，需服务器端配置ServerSideIncludeModule为html扩展
不可直接双击页面文件浏览，需要在服务器环境下进行浏览，以dist为网站根目录

## 源码使用方法

1. 安装配置环境： `node.js` 和 `grunt`
2. 在命令行环境下，在项目根目录输入命令： `npm install`，安装项目依赖 node modules
3. 进入Gruntfile.js所在目录下，编译所有文件，输入 `grunt`
4. 开发时，实时监测 src 目录文件(CSS & JS & HTML)改动，并实时编译，输入 `grunt watch:components`
5. 开发时，实时监测仅脚本及样式(CSS & JS)改动，并实时编译，输入 `grunt watch:assets`
