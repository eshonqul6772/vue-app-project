import {createStore} from 'vuex';

import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

const store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {alert, account, users},
})

export default store