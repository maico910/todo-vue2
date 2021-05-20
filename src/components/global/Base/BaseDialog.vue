<template>
  <q-dialog
    :value="true"
    transition-show="slide-up"
    transition-hide="slide-down"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <q-card
      style="width: 700px; max-width: 80vw;"
      class="bg-grey-3"
    >
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          {{ title }}
        </div>
        <q-space />
        <q-btn
          v-close-popup
          icon="fas fa-times"
          flat
          round
          dense
        />
      </q-card-section>

      <q-separator spaced />

      <slot />

      <!-- <q-card-section class="q-pt-none q-pb-sm">
        <slot />
        {{ $scopedSlots }}
      </q-card-section> -->

      <!-- <template name="">

      </template> -->
      <!-- <slot name="actions">
        <q-card-actions>
          card actions
        </q-card-actions>
      </slot> -->
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: 'BaseDialog',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
