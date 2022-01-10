<template>
  <div class="box-container">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Box',
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
  background-color: $grey-background;
  padding: 20px;
  padding-top: 10px;
  border-radius: 20px;
}
</style>
