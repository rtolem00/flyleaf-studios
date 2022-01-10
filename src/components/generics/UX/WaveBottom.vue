<template>
  <div class="wave-bottom" :class="{ desktop: !isMobile }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#000"
        fill-opacity="1"
        d="M0,160L48,149.3C96,139,192,117,288,101.3C384,85,480,75,576,80C672,85,768,107,864,138.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
</template>
<script lang="ts">
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WaveBottom',
  setup() {
    return {
      isMobile: sessionManager.isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.wave-bottom {
  position: absolute;
  bottom: -5px;
  width: 100%;
  &.desktop {
    bottom: -135px;
  }
}
</style>
