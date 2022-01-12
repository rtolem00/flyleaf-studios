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
      <AboutUs />
    </section>
    <section id="contact-us">
      <ContactUs />
    </section>
    <AcceptCookies v-if="!sessionState.cookiesAccepted" :data-aos="TransitionType.FADE_UP" />
  </div>
</template>

<script lang="ts">
import AboutUs from '@/components/areas/landing/AboutUs.vue';
import CommingSoon from '@/components/areas/landing/CommingSoon.vue';
import CompanyValues from '@/components/areas/landing/CompanyValues.vue';
import ContactUs from '@/components/areas/landing/ContactUs.vue';
import FrontPage from '@/components/areas/landing/FrontPage.vue';
import HowWeDo from '@/components/areas/landing/HowWeDo.vue';
import AcceptCookies from '@/components/generics/UX/AcceptCookies.vue';
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Landing',
  components: {
    FrontPage,
    CompanyValues,
    HowWeDo,
    AboutUs,
    CommingSoon,
    ContactUs,
    AcceptCookies,
  },
  setup() {
    const sessionState = sessionManager.state;
    return {
      isMobile: sessionManager.isMobile,
      sessionState,
      TransitionType,
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
      &#front-page,
      &#contact-us {
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
      &#contact-us {
        margin-bottom: 0;
      }
    }
  }
}
</style>
