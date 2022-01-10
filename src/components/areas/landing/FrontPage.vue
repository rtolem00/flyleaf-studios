<template>
  <div class="container" :class="{ desktop: !isMobile }">
    <video autoplay playsinline loop muted class="background">
      <source :src="require('@/assets/videos/landing/home-background.mp4')" type="video/mp4" />
    </video>
    <div class="title" :data-aos="TransitionType.FADE_UP">
      <h1>Flyleaf Studios</h1>
      <h2>Game Development Studio</h2>
    </div>
  </div>
</template>
<script lang="ts">
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FrontPage',
  components: {},
  setup() {
    return {
      isMobile: sessionManager.isMobile,
      TransitionType,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  color: #fff;
  position: relative;
  .background {
    top: 0;
    position: absolute;
    z-index: -1;
    height: 100%;
  }
  h1 {
    font-size: 60px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 25px;
    margin-top: 0;
  }
  .values {
    margin-top: auto;
  }
  &.desktop {
    justify-content: center;
    overflow: hidden;
    .background {
      height: auto;
      width: 100%;
    }
    h1 {
      font-size: 70px;
    }
  }
}
</style>
