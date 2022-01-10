<template>
  <div class="howwedo-container" :class="{ desktop: !isMobile }">
    <div class="header">
      <div class="header-bg"></div>
      <div class="header-container">
        <h2 class="title">We are experts in</h2>
        <span class="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </span>
      </div>
    </div>
    <div class="expert-in-boxes">
      <div class="expert-in-box-container"><PlayToEarn :data-aos="TransitionType.FADE_LEFT" /></div>

      <div class="expert-in-box-container"><Blockchain :data-aos="TransitionType.FADE_LEFT" /></div>

      <div class="expert-in-box-container"><NFT :data-aos="TransitionType.FADE_RIGHT" /></div>

      <div class="expert-in-box-container"><Unity :data-aos="TransitionType.FADE_LEFT" /></div>

      <div class="expert-in-box-container"><UnrealEngine :data-aos="TransitionType.FADE_RIGHT" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import Blockchain from '@/components/modules/landing/how-we-do/Blockchain.vue';
import NFT from '@/components/modules/landing/how-we-do/NFT.vue';
import PlayToEarn from '@/components/modules/landing/how-we-do/PlayToEarn.vue';
import Unity from '@/components/modules/landing/how-we-do/Unity.vue';
import UnrealEngine from '@/components/modules/landing/how-we-do/UnrealEngine.vue';
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HowWeDo',
  components: {
    Unity,
    UnrealEngine,
    PlayToEarn,
    NFT,
    Blockchain,
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
.howwedo-container {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #000;
  .header {
    color: #fff;
    text-align: center;
    background-image: url('~@/assets/img/landing/background-2.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: initial;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .header-bg {
      background-color: $opaque-background;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: absolute;
    }
    .header-container {
      padding: 20px 10px;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      .title {
        margin-top: 0;
        margin-bottom: 10px;
        color: $title-blue;
        font-size: 35px;
      }
    }
  }

  .expert-in-boxes {
    margin-top: 50px;
    width: 100%;
    .expert-in-box-container {
      max-width: 620px;
      margin: 20px auto;
    }
  }

  &.desktop {
    .header {
      background-attachment: fixed;
      width: 100%;
      .header-container {
        padding: 50px 10px;
        width: 50%;
      }
    }
    .expert-in-boxes {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: stretch;
      flex-wrap: wrap;
      width: 70%;
      .expert-in-box-container {
        flex: 1 0 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 25px;
      }
    }
  }
}
</style>
