<template>
  <RouterLink class="rout-link" to="/">
    <home-two-tone/>
    page_routes
  </RouterLink>
  <div class="pageHeader">
    <h2 class="table_title">title_table</h2>
    <Button class="btn-header"><plus-circle-outlined class="icons" style="font-weight: bold; background-color: white; color: #00b74a; border-radius: 50%"/> add_action</Button>
  </div>
</template>

<script setup>
import { HomeTwoTone, PlusCircleOutlined } from '@ant-design/icons-vue';
</script>

<style scoped>
.rout-link {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 10px;
  text-decoration: none;
  color: #5a6d80;
  font-weight: 600;
  font-size: 11px;
  line-height: 140%;
}

.pageHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.table_title {
  color: #0a2d56;
  font-weight: bold;
  font-size: 23px;
  line-height: 140%;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
}

.btn-header {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #39bd83;
  color: white;
  font-weight: 600;
  line-height: 140%;
  font-size: 13px;
}

.btn-header .icons{

}
</style>