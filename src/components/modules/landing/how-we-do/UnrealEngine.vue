<template>
  <div id="unreal-engine-container">
    <Box>
      <div class="box-content">
        <div class="header">
          <span class="icon">
            <img :src="require('@/assets/icons/landing/unreal-engine.svg')" alt="unreal engine logo" />
          </span>
          <h3 class="title">UNREAL ENGINE GAME DEVELOPMENT</h3>
        </div>
      </div>
    </Box>
  </div>
</template>
<script lang="ts">
import Box from '@/components/generics/UI/Box.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UnrealEngine',
  components: {
    Box,
  },
});
</script>

<style lang="scss" scoped>
#unreal-engine-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  .box-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .header {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      .title {
        color: $title-purple;
        margin: 0;
        text-align: center;
      }
    }
  }
}
</style>
