<template>
  <div>
    <h2>Tabla</h2>
    <div class="alert alert-success" v-if="successMessage">
      {{ successMessage }}
    </div>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Teléfono</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in formData" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.phone }}</td>
            <td>
              <button
                @click="deleteItem(item.id, index)"
                class="btn btn-danger"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["formData", "successMessage"]),
  },
  created() {
    this.fetchFormData();
  },
  methods: {
    ...mapActions(["fetchFormData", "deleteFormData"]),
    deleteItem(id, index) {
      this.deleteFormData({ id, index })
        .then(() => {
          alert("Usuario eliminado exitosamente");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
