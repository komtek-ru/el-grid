<template>
  <div id="app">
    <el-grid
      class="min-height-500"
      ref="grid"
      :loading="loading"
      type="local"
      :data="items"
      :columns="columns"
      :form-options="formOptions"
      :page-sizes="[5, 10, 25]"
    >
      <header slot="grid-header" class="padding-10">
        <i class="header-icon"></i>
      </header>

      <template #isActive="{ row }">
        <el-checkbox v-model="row.isActive" />
      </template>

      <template #controls="{ row}">
        <div class="d-flex justify-content-between">
          <button-action @handler="editItem(row)"></button-action>
          <button-delete @handler="deleteItem(row)"></button-delete>
        </div>
      </template>
    </el-grid>
  </div>
</template>

<script>
import items from './api/data';

export default {
  name: 'App',

  data() {
    return {
      loading: true,
      items
    };
  },

  computed: {
    columns() {
      return [
        {
          slotName: 'isActive',
          sortable: false,
          align: 'center',
          width: 75
        },
        {
          prop: 'name',
          label: 'Name',
          width: 300
        },
        {
          prop: 'age',
          label: 'Age',
          width: 100
        },
        {
          prop: 'email',
          label: 'Email',
          width: 250
        },
        {
          prop: 'phone',
          label: 'Phone',
          width: 200
        },
        {
          prop: 'friends',
          label: 'Friends',
          render: ({ friends }) => friends.map(x => x.name).join(', ')
        },
        {
          slotName: 'controls',
          sortable: false,
          align: 'center',
          width: 75
        }
      ];
    },

    formOptions() {
      return {
        forms: [
          { prop: 'name', placeholder: 'Name', width: 100 },
          { prop: 'mail', placeholder: 'Email', width: '200px' }
        ]
      };
    }
  },

  methods: {
    editItem({ name }) {
      alert(`Edit employee with name: ${name}`);
    },

    deleteItem({ id }) {
      this.items.splice(
        this.items.findIndex(x => x.id === id),
        1
      );
    }
  },

  created() {
    setTimeout(() => (this.loading = false), 2000);
  }
};
</script>
