# ElGrid

<a href="https://www.npmjs.org/package/@komtek/el-grid">
  <img src="https://img.shields.io/npm/v/@komtek/el-grid.svg">
</a>
<a href="LICENSE">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
</a>

#### A Vue.js component which combines form, table, pagination components in Element UI.

![](./docs/usage.gif)

## Import to project

```
import { ButtonAction, ButtonDelete, ElGrid } from '@komtek/el-grid'

Vue.use(ElGrid)
Vue.use(ButtonAction)
Vue.use(ButtonDelete)

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

### Compiles and minifies for production

```
npm run build
```

### Compiles and minifies as package

```
npm run lib:build
```

## Roadmap

- Support i18n
- Examples
- API docs
