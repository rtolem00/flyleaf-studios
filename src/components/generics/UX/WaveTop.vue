<template>
  <div class="wave-top" :class="{ desktop: !isMobile }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#000"
        fill-opacity="1"
        d="M0,160L48,149.3C96,139,192,117,288,101.3C384,85,480,75,576,80C672,85,768,107,864,138.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>
<script lang="ts">
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WaveTop',
  setup() {
    return {
      isMobile: sessionManager.isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.wave-top {
  position: absolute;
  top: -1px;
  width: 100%;
  &.desktop {
    top: -90px;
  }
}
</style>
