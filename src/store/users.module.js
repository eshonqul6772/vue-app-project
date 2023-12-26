import { userService } from '../service';

const state = {
    all: {}
};

const actions = {
    getList({ commit }) {
        commit('getAllRequest');

        userService.getList()
            .then(
                users => commit('getAllSuccess', users),
                error => commit('getAllFailure', error)
            );
    },
    delete({ commit }, id) {
        commit('deleteRequest', id);

        userService.delete(id)
            .then(
                () => commit('deleteSuccess', id),
                error => commit('deleteFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, users) {
        state.all = { items: users };
    },
    getAllFailure(state, error) {
        state.all = { error };
    },
    deleteRequest(state, id) {
        state.all.items = state.all.items.map(user =>
            user.id === id
                ? { ...user, deleting: true }
                : user
        )
    },

    deleteSuccess(state, id) {
        state.all.items = state.all.items.filter(user => user.id !== id)
    },

    deleteFailure(state, { id, error }) {
        state.all.items = state.items.map(user => {
            if (user.id === id) {
                const { deleting, ...userCopy } = user;
                return { ...userCopy, deleteError: error };
            }

            return user;
        })
    }
};

export const users = {
    namespaced: true,
    state,
    actions,
    mutations
};
