<template>
    <div>
      <ul class="sidebar-list">
        <li v-for="route in routes">
          <RouterLink :to='route.path'>{{route.title}}</RouterLink>
        </li>
      </ul>
    </div>
</template>

<script setup>
  import routes from './routes'
</script>

<style scoped>
.sidebar-list{

}
</style>