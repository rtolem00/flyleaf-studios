<template>
  <div class="commingsoon-container" :class="{ desktop: !isMobile }">
    <div class="header" :data-aos="TransitionType.ZOOM_IN">
      <h2 class="title">Comming soon</h2>
    </div>
    <div class="content">
      <Kandra />
    </div>
  </div>
</template>
<script lang="ts">
import Kandra from '@/components/modules/landing/comming-soon/Kandra.vue';
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommingSoon',
  components: {
    Kandra,
  },
  setup() {
    return {
      isMobile: sessionManager.isMobile,
      TransitionType,
    };
  },
});
</script>

<style lang="scss" scoped>
.commingsoon-container {
  .header {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .title {
      color: $title-blue;
      font-size: 35px;
    }
  }
}
</style>
