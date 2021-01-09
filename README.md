![](src/image/WebCell-0.png)

# ALLab PWA

**集火实验室**官方网站的[渐进式 Web 应用][1]

https://jiepaifuture.com/

[![CI & CD](https://github.com/demongodYY/alllab-website/workflows/CI%20&%20CD/badge.svg)][2]

## 数据后台

-   管理界面：https://data.jiepaifuture.com/admin/
-   接口文档：https://data.jiepaifuture.com/documentation/
-   API 入口：https://data.jiepaifuture.com/

## Technology stack

-   Language: [TypeScript v4][3]
-   Component engine: [WebCell v2][4]
-   Component suite: [BootCell v1][5]
-   PWA framework: [Workbox v6][6]
-   Package bundler: [Parcel v1][7]
-   CI / CD: [GitHub Actions][8] + [Aliyun OSS][9]

## Development

```shell
npm install

npm start
```

## Deployment

```shell
npm run build
```

[1]: https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps
[2]: https://github.com/demongodYY/alllab-website/actions
[3]: https://typescriptlang.org
[4]: https://web-cell.dev/
[5]: https://bootstrap.web-cell.dev/
[6]: https://developers.google.com/web/tools/workbox
[7]: https://parceljs.org
[8]: https://github.com/features/actions
[9]: https://www.aliyun.com/product/oss
