<template>
  <BaseDialog
    title="Criar Lista"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <q-form ref="form" autofocus @submit.prevent="createList">
      <q-card-section>
        <BaseInput :value.sync="name" :rules="[val => !!val || 'Preenche o nome']" label="Nome" />
        <BaseInput :value.sync="description" label="Descrição (opcional)" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          v-close-popup
          flat
          color="negative"
          label="voltar"
        />
        <q-btn
          color="primary"
          label="Criar"
          type="submit"
        />
      </q-card-actions>
    </q-form>
  </BaseDialog>
</template>

<script>
import BaseDialog from '../global/Base/BaseDialog.vue'
export default {
  components: { BaseDialog },

  data() {
    return {
      name: '',
      description: ''
    }
  },

  methods: {
    createList() {
      let newList = {
        name: this.name,
        description: this.description
      }

      this.$store.dispatch('todo/addList', newList)
      this.$emit('hide')
    }
  }
}
</script>
