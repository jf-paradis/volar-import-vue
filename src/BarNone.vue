<template>
  <foo-bar>{{ message }}</foo-bar>
</template>
<script lang="ts">
import FooBar from './FooBar.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    FooBar,
  },
  props: {
    message: { type: String, required: true }
  },
});
</script>
