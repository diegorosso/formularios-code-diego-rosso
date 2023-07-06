<template>
  <div>
    <FormularioDatos @submit="addData" />
    <TablaReactiva :formData="formData" @remove="removeData" />
  </div>
</template>

<script>
import FormularioDatos from "./components/FormularioDatos.vue";
import TablaReactiva from "./components/TablaReactiva.vue";
import { mapState } from "vuex";

export default {
  components: {
    FormularioDatos,
    TablaReactiva,
  },
  computed: {
    ...mapState(["formData"]),
  },
  methods: {
    addData(newData) {
      this.formData.push(newData);
    },
    removeData(index) {
      this.formData.splice(index, 1);
    },
  },
};
</script>
