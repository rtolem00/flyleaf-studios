<template>
  <div class="main-container" :class="{ desktop: !isMobile }">
    <section id="front-page">
      <FrontPage />
    </section>
    <section id="comming-soon">
      <CommingSoon />
    </section>
    <section id="how-we-do">
      <HowWeDo />
    </section>
    <section id="company-values">
      <CompanyValues />
    </section>
    <section id="who-we-are">
      <WhoWeAre />
    </section>
  </div>
</template>

<script lang="ts">
import CommingSoon from '@/components/areas/landing/CommingSoon.vue';
import FrontPage from '@/components/areas/landing/FrontPage.vue';
import HowWeDo from '@/components/areas/landing/HowWeDo.vue';
import WhoWeAre from '@/components/areas/landing/WhoWeAre.vue';
import CompanyValues from '@/components/modules/landing/front-page/CompanyValues.vue';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Landing',
  components: {
    FrontPage,
    CompanyValues,
    HowWeDo,
    WhoWeAre,
    CommingSoon,
  },
  setup() {
    return {
      isMobile: sessionManager.isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  &:not(.desktop) {
    overflow: hidden;
    section {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      margin: 25px 0;
      &#company-values,
      &#front-page {
        margin-top: 0;
      }
      &#front-page {
        margin-bottom: 0;
      }
    }
  }

  &.desktop {
    section {
      margin: 50px 0;
      &#front-page {
        margin-top: 0;
      }
    }
  }
}
</style>
