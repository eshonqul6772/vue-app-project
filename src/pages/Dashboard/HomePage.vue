<template>
    <div>
      <Sidebar/>
        <p>
            <RouterLink to="/login">Logout</RouterLink>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Sidebar from '@/layouts/Sidebar/Sidebar.vue'

export default {
    components:{
      Sidebar
    },
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};
</script>