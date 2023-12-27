<template>
  <div>
    <PageHeader/>
    <a-table pagination=false}} style="font-weight: 600" :dataSource="users.items" :columns="columns" size="small"/>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>

import {mapState, mapActions} from 'vuex';

import PageHeader from "@/components/PageHeader/PageHeader.vue";

export default {
  components: {
    PageHeader
  },

  computed: {
    ...mapState ({
      account: state => state.account,
      users: state => state.users.all
    })
  },


  created () {
    this.getAllUsers ();
  },
  methods: {
    ...mapActions ('users', {
      getAllUsers: 'getList',
      deleteUser: 'delete'
    })
  },

  setup () {
    return {
      columns: [
        {
          title: 'column_first_name',
          dataIndex: 'first_name',
          key: 'first_name',
        },
        {
          title: 'column_last_name',
          dataIndex: 'last_name',
          key: 'last_name',
        },
        {
          title: 'column_login',
          dataIndex: 'login',
          key: 'login',
        },
        {
          title: 'column_status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'column_type',
          dataIndex: 'type',
          key: 'type',
        },
      ],
    };
  },

};
</script>