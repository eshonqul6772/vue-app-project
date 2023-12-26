<template>
  <div class="wrapper">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="input-box">
        <label for="username">field_username</label>
        <input type="text" v-model="username" name="username" class="form__input" :class="{ 'is-invalid': submitted && !username }" />
        <div v-show="submitted && !username" class="valid-masses">validation_required</div>
      </div>
      <div class="input-box">
        <label htmlFor="password">field_password</label>
        <input  type="password" v-model="password" name="password" class="form__input" :class="{ 'is-invalid': submitted && !password }" />
        <div v-show="submitted && !password" class="valid-masses">validation_required</div>
      </div>
      <div class="form-group">
        <button class="form__btn" :disabled="status.loggingIn">Login</button>
        <img v-show="status.loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" alt="loader"/>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: '',
      submitted: false,
      remember_me: true,
    }
  },
  computed: {
    ...mapState('account', ['status'])
  },


  created () {
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    handleSubmit (e) {
      e.preventDefault();
      this.submitted = true;
      const { username, password ,remember_me} = this;
      if (username && password && remember_me) {
        this.login({ username, password,remember_me })
      }
    }
  }
};
</script>


<style scoped>

.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  inline-size:100vw;
  block-size:100vh;
  background-color: #0a2d56;
}

.form{
  inline-size: 500px;
  padding: 20px;
  background-color: #9baab8;
}

.input-box{
  display: flex;
  flex-direction: column;
  margin-block-end: 10px;
}

.input-box input {
  padding: 8px 15px;
  margin-block-end: 5px;
  border-radius: 6px;
  outline: none;
  border: 1px solid transparent;
  transition: all 0.4s ease;
}

.input-box input:hover{
  border-color: #0a2d56;
  outline-color: #ff0000;
}

.input-box label{
  margin-block-end: 5px;
  color: #0a2d56;
  font-weight: 600;
  font-size: 13px;
  line-height: 140%;
  word-break: break-all;
}

.input-box label::before{
  content: '*';
  font-size: 15px;
  padding-inline-end: 3px;
  color: red;
}

.valid-masses{
  margin-block-end: 10px;
  color: #f03a45;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
}

button{
  inline-size:100%;
  margin-block-end: 10px;
  padding:8px;
  color: white;
  background-color: #0a2d56;
  font-weight: bold;
  border:none;
  border-radius: 6px;
  transition: all 0.4s ease;
}

button:hover{
  transform: scale(1.03);
}
</style>