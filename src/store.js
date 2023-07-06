import { createStore } from 'vuex';

export default createStore({
  state: {
    formData: [],
    successMessage: false
  },
  mutations: {
    setFormData(state, data) {
      state.formData = data;
    },
    removeFormData(state, index) {
      state.formData.splice(index, 1);
    },
    setSuccessMessage(state, value) {
      state.successMessage = value;
    }
  },
  actions: {
    async fetchFormData({ commit }) {
      try {
        const response = await fetch('https://649de6aa9bac4a8e669e70b3.mockapi.io/api/users');
        const data = await response.json();
        commit('setFormData', data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFormData({ commit }, { id, index }) {
      try {
        await fetch(`https://649de6aa9bac4a8e669e70b3.mockapi.io/api/users/${id}`, {
          method: 'DELETE',
        });
        commit('removeFormData', index);
      } catch (error) {
        console.error(error);
      }
    },
    async submitFormData({ commit, dispatch }, formData) {
      try {
        const response = await fetch('https://649de6aa9bac4a8e669e70b3.mockapi.io/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          dispatch('fetchFormData');
          commit('setSuccessMessage', true);
        } else {
          console.error('Error al enviar los datos del formulario al backend');
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
