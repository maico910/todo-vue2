<template>
  <q-page>
    <q-scroll-area horizontal>
      <ListTodo :lists="lists" />
    </q-scroll-area>
  </q-page>
</template>

<script>
import ListTodo from 'src/components/Todo/ListTodo'
import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  components: { ListTodo },
  computed: {
    ...mapGetters('todo',[
      'lists'
    ])
  }
}
</script>

<style lang="sass" scoped>
  .q-scrollarea
    height: calc( 100vh - 50px )
    width: 100%
</style>