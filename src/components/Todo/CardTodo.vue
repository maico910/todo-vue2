<template>
  <q-item
    v-ripple
    clickable
    class="q-card column"
    style="width: 250px"
  >
    <q-item-label :class="{'list-completed': currentTodos.length && currentTodos.every(todo => todo.completed)}" class="flex q-py-sm q-px-none justify-between items-center" header>
      {{ list.name }}
    </q-item-label>
  </q-item>
</template>

<script>
export default {
  props: {

    list: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      currentTodos: []
    }
  },

  computed: {
    todos() {
      return this.list.todos
    },

    todosValue() {
      return this.list.todos.filter(todo => todo.completed).map(completedTodo => completedTodo.name)
    },

    todosOptions() {
      return this.list.todos.map((todo) => {
        return {
          label: todo.name,
          value: todo.name
        }
      })
    }
  },

  mounted () {
    this.currentTodos = JSON.parse(JSON.stringify(this.todos))
  },

  methods: {
    updateTodo(targetTodo) {
      this.currentTodos.find(todo => todo.name === targetTodo.name).completed = targetTodo.completed
    }
  }
}
</script>
