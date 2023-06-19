<template>
  <div>
    <h2>Formulario</h2>
    <form @submit.prevent="submitForm" class="row g-3" ref="form">
      <div class="col-md-6">
        <label for="name" class="form-label">Nombre:</label>
        <input type="text" id="name" v-model="name" class="form-control" minlength="3" maxlength="50" required>
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control" required>
      </div>
      <div class="col-md-6">
        <label for="age" class="form-label">Edad:</label>
        <input type="number" id="age" v-model.number="age" class="form-control" min="18" required>
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label">Teléfono:</label>
        <input type="tel" id="phone" v-model="phone" class="form-control" pattern="[0-9\-]+" required>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Agregar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      age: 0,
      phone: ''
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.checkValidity() && this.validateAge()) {
        const newData = {
          name: this.name,
          email: this.email,
          age: this.age,
          phone: this.phone
        };
        this.$emit('submit', newData);
        this.name = '';
        this.email = '';
        this.age = 0;
        this.phone = '';
      }
    },
    validateAge() {
      if (this.age < 18) {
        alert('Debes ser mayor de 18 años para completar el formulario.');
        return false;
      }
      return true;
    }
  }
};
</script>
