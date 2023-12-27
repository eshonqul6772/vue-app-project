<template>
  <div class="wrapper">
    <div class="sidebar">
      <Sidebar/>
    </div>
    <div class="content">
      <div class="header"></div>
      <Navbar/>
        <div class="content-box">
          <RouterView/>
        </div>
    </div>
  </div>

</template>

<script>
import {mapState, mapActions} from 'vuex';
import Sidebar from '@/layouts/Sidebar/Sidebar.vue';
import Navbar from "@/layouts/Header/Header.vue";
import UserView from '@/views/UserView.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    UserView

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
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.sidebar {
  width: 200px;
  min-height: 100vh;
  background-color: #001529;
}

.content {
  width: 100%;
  background-color: #DDE9F8;
}

.content-box{
  padding:20px;
}

</style>