<template>
  <div>
    <FormularioDatos @submit="addData" />
    <TablaReactiva :data="data" @remove="removeData" />
  </div>
</template>

<script>
import FormularioDatos from './components/FormularioDatos.vue';
import TablaReactiva from './components/TablaReactiva.vue';

export default {
  components: {
    FormularioDatos,
    TablaReactiva
  },
  data() {
    return {
      data: []
    };
  },
  methods: {
    addData(newData) {
      this.data.push(newData);
    },
    removeData(index) {
      this.data.splice(index, 1);
    }
  }
};
</script>
