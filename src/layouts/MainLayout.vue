<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen"/>

        <q-toolbar-title> Vue 2 - Todo List </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item v-ripple clickable @click="dialog.addTodo = true">
          <q-item-section avatar>
            <q-icon name="fas fa-list-alt" />
          </q-item-section>

          <q-item-section>
            Adicionar Lista
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <DialogAddTodo v-if="dialog.addTodo" @hide="dialog.addTodo = false" />
  </q-layout>
</template>

<script>
import DialogAddTodo from 'src/components/Todo/DialogAddTodo.vue'

export default {
  name: 'MainLayout',
  components: { DialogAddTodo },
  data () {
    return {
      leftDrawerOpen: false,
      dialog: {
        addTodo: false
      },
    }
  }
}
</script>
