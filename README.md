# ElGrid

<a href="https://www.npmjs.org/package/@komtek/el-grid">
  <img src="https://img.shields.io/npm/v/@komtek/el-grid.svg">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</a>

#### A Vue.js component which combines form, table, pagination components in Element UI.

![](./docs/usage.gif)

## Install to project

```
npm i @komtek/el-grid
```

## Import to project

```
import ElGrid from '@komtek/el-grid'
import '@komtek/el-grid/dist/el-grid.css'

Vue.use(ElGrid)
```

## Basic usage

See full [example](./examples/demo.html)

```
<el-grid
  :loading="loading"
  type="local"
  :data="items"
  :columns="columns"
  :form-options="formOptions"
  :page-sizes="[5, 10, 25]"
>
</el-grid>
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies as package for production

```
npm run lib:build
```

## Roadmap

- Support i18n
- Examples
- API docs
