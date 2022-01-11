<template>
  <div id="contact-us-container" :class="{ desktop: !isMobile }">
    <div class="content">
      <div class="header" :data-aos="TransitionType.FADE_DOWN">
        <h2>Contact us</h2>
        <h3>Support, Sales & Product Development</h3>
      </div>
      <div class="social-networks" :data-aos="TransitionType.FADE_UP">
        <Twitter />
        <Email />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Email from '@/components/modules/landing/contact-us/Email.vue';
import Twitter from '@/components/modules/landing/contact-us/Twitter.vue';
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ContactUs',
  components: {
    Twitter,
    Email,
  },
  props: {
    blackBackground: {
      type: Boolean,
      default: false,
    },
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
#contact-us-container {
  width: 100vw;
  background-color: $grey-background;
  .content {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  .header {
    color: #fff;
    padding: 25px 0;
    h2 {
      font-size: 40px;
      margin: 0;
      color: $title-blue;
    }
    h3 {
      font-size: 22px;
    }
  }
  .social-networks {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    > div {
      width: 100%;
      margin: 25px 10px;
      max-width: 320px;
      min-width: 320px;
    }
  }
  &.desktop {
    width: 100%;
    .content {
      width: 80%;
      flex-flow: row;
      padding: 75px 0;
      margin: auto;
      .header {
        width: 100%;
        h2 {
          font-size: 40px;
          margin: 0;
        }
        h3 {
          margin: 0;
          font-size: 32px;
        }
      }
      .social-networks {
        flex-flow: row;
        justify-content: center;
        > div {
          width: 50%;
          max-width: 225px;
          margin: 0 20px;
          min-width: unset;
        }
      }
    }
  }
}
</style>
