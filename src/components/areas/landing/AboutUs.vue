<template>
  <div id="aboutus-container" :class="{ desktop: !isMobile }">
    <div class="header">
      <div class="header-bg"></div>
      <div class="title-container">
        <h2 :data-aos="TransitionType.ZOOM_IN" class="title">ABOUT US</h2>
      </div>
    </div>
    <div class="aboutus-description">
      <div :data-aos="TransitionType.ZOOM_IN" class="description">
        <p>
          The studio is made up of professionals from different sectors who have come together to develop a project with
          all their knowledge.
        </p>
        <p>
          One of our main objectives is to create a great studio in which to bet on human capital as the main value and
          to cultivate the talent to reflect in each of our projects. and cultivate the talent that we reflect in each
          of our projects.
        </p>
      </div>
      <div :data-aos="TransitionType.FADE_UP" class="flyleaf-logo">
        <img :src="require('@/assets/img/landing/flyleaf-logo-trans.png')" alt="flyleaf-logo" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutUs',
  setup() {
    return {
      isMobile: sessionManager.isMobile,
      TransitionType,
    };
  },
});
</script>

<style lang="scss" scoped>
#aboutus-container {
  width: 100vw;
  min-height: 50vh;
  overflow: hidden;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: $grey-background;
    height: 200px;
    background-image: url('~@/assets/img/landing/background-3.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: initial;
    position: relative;
    .header-bg {
      background-color: $opaque-background;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    .title-container {
      background-color: $opaque-background;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title {
      color: $title-blue;
      font-size: 35px;
      margin-bottom: 5px;
      margin: 0;
    }
  }
  .aboutus-description {
    padding: 0 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    .flyleaf-logo {
      animation: floating-animation 4s ease-in-out infinite;
      height: 200px;
      img {
        height: 100%;
      }
    }
  }
  &.desktop {
    width: 100%;
    .header {
      background-attachment: fixed;
      background-position: initial;
      .title {
        font-size: 42px;
      }
    }
    .aboutus-description {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      width: 60%;
      margin: auto;
      margin-top: 55px;
      .description {
        width: 50%;
      }
    }
  }
}
</style>
