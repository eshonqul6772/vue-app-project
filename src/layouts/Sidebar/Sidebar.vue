<template>
  <aside class="sidebar">
    <ul class="sidebar-list">
      <li class="header-list"></li>
      <li v-for="route in routes">
        <dashboard-outlined class="icon"/>
        <RouterLink class="link" :to='route.path'>{{ route.title }}</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import routes from './routes'
import {DashboardOutlined} from '@ant-design/icons-vue';
</script>

<style scoped>


.sidebar-list {
  block-size: 100vh;
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  padding: 10px 20px;
}

.link {
  color: #efdfdf;
  text-decoration: none;
}

.icon {
  color: #c2aaaa;
  margin-right: 6px;
}

</style>