<template>
  <div class="box-container" :class="{ 'black-background': blackBackground }">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box',
  props: {
    blackBackground: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.box-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 10px;
  border-radius: 20px;
  background-color: $grey-background;
  &.black-background {
    background-color: $body-background-color;
  }
}
</style>
