bisheng-theme-ui
================
> react ui library theme for [bisheng](https://github.com/benjycui/bisheng). Almost Copied from [react-amap](https://github.com/ElemeFE/react-amap)

Usage
-----

```bash
$ yarn add bisheng-theme-ui --dev
```

```javascript
// bisheng.config.js
{
  theme: 'bisheng-theme-ui'
  ....
}
```

How To Write Doc
----------------

### 文件目录结构

```
- components
  - componentA
    - demo // 组件demo文档
      - demoA.md
    - index.jsx
    - index.md // 组件文档
    ...
```

### 文档相关
> 文档使用[bisheng](https://github.com/benjycui/bisheng)生成

#### articles
> 说明性质的文档，放置在`articles/`目录下

#### components
> 组件文档，demo展示，api说明，放置在各组件目录下

- 组件目录下创建`index.md`文件，基本结构如下

  ![carbon 2](https://user-images.githubusercontent.com/4456380/34717675-d3532b10-f56e-11e7-961c-33de960cb365.png)

  - **title** - 组件名，左侧导航名

  - **order** - 左侧导航栏顺序

  - **API** - 组件参数说明


- 组件**demo**

  如果要编写组件**demo**，只需要在组件目录下创建**demo**目录，并将相应的文档放置在改目录下即可，基本结构如下

  ![carbon 3](https://user-images.githubusercontent.com/4456380/34717723-f5ab8d4c-f56e-11e7-9c91-64a9dca14604.png)


  - **title** - demo名称

  - **order** - demo顺序

  - **jsx** - demo实现
