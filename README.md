# Rust + WebAssembly + TS 实现贪吃蛇

## 参考
B 站原子之音：[从零开始创建一个WebAssembly游戏]( https://www.bilibili.com/video/BV19a41127Dq/?share_source=copy_web&vd_source=ceffff3fed408e9624c0aba15363d1b8)
## 环境准备
- node.js: Windows 直接去官网下载安装
- webpack
```shell
npm install --save webpack webpack-cli

npm install --save-dev webpack-dev-server
# webpack 插件
npm install --save copy-webpack-plugin
```
- typescript
```shell
npm install typescript
npm install --save typescript ts-loader
```

## 将 Rust 编译成 wasm
```shell
wasm-pack build --target web
```

## 项目运行
```shell
npm run dev
```
## 完成度 40%
- 游戏画布 Done
- 蛇头运动 Done
- 键盘控制方向 Done
- 随机生成食物
- 画出整个蛇
- 蛇吃食物变长
- 成功、失败判断