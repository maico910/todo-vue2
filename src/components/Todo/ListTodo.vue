<template>
  <div id="list-todo" class="row no-wrap">
    <template v-if="lists.length">
      <CardTodo v-for="(list, index) in lists" :key="index" :list="list" />
    </template>
    <template v-else>
      <q-card class="q-pa-md cursor-pointer">
        Nenhuma lista criada. Adicione pelo menu.
      </q-card>
    </template>
  </div>
</template>

<script>
import CardTodo from './CardTodo'
export default {
  components: { CardTodo },
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  #list-todo {
    align-items: baseline;

    > * {
      margin: 16px;
    }

    .q-card:hover {
      transition: 0.3s all;
      background-color: #E4E4E4;
    }
  }

</style>