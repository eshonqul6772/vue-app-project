<template>
  <div class="header">
    <button class="toggle-menu">
      <menu-outlined/>
    </button>

    <div class="profile-wrapper">

      <a-dropdown trigger="[click]" arrow>
        <a class="lang" style="color: #5c0732" @click.prevent>
          UZ
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a>EN</a>
            </a-menu-item>
            <a-menu-item>
              <a>RU</a>
            </a-menu-item>
            <a-menu-item>
              <a>UZ</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <a-dropdown trigger="[click]" arrow>
        <a class="profile" style="color: #5c0732" @click.prevent>
          A
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a @click='logout'>logout</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>

import {MenuOutlined} from '@ant-design/icons-vue';

export default {
  components: {
    MenuOutlined
  },

}

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  color: white;
  background-color: white;
}

.profile-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

button {
  background-color: transparent;
  color: black;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

.profile, .lang {
  display: flex;
  justify-content: center;
  align-items: center;
  inline-size: 40px;
  block-size: 40px;
  background-color: #39BD83;
  border-radius: 50%;
  font-size: 20px;
  font-weight: bold;
}

.profile select option {
  color: black;
}

.lang {
  background-color: white;
  color: black;
}

</style>