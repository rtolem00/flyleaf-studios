<template>
  <div class="links" :class="{ desktop: !isMobile }">
    <div class="watch-trailer btn">
      <h3>WATCH TRAILER</h3>
      <span class="icon">
        <img :src="require('@/assets/icons/landing/play.svg')" alt="unity logo" />
      </span>
    </div>
    <div class="purchase-now btn">
      <span class="icon">
        <img :src="require('@/assets/icons/landing/control.svg')" alt="unity logo" />
      </span>
      <h3>PURCHASE NOW</h3>
    </div>
  </div>
</template>
<script lang="ts">
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Kandra',
  setup() {
    return { isMobile: sessionManager.isMobile };
  },
});
</script>

<style lang="scss" scoped>
.kandra-container {
  .links {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .btn {
      margin: 10px 0;
      width: 90%;
      max-width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      border-radius: 20px;
      padding: 10px 30px;
      h3 {
        font-size: 20px;
      }
      &.watch-trailer {
        background: linear-gradient(-45deg, #6e358c, #523372, #3b2d56, #2a2539, #1c1c1c);
        background-size: 400% 400%;
        animation: gradient_animation 7s ease infinite;
      }
      &.purchase-now {
        background: linear-gradient(-45deg, #1c1c1c, #364352, #367386, #35a7a8, #6ddbb1);
        background-size: 400% 400%;
        animation: gradient_animation 7s ease infinite;
      }
      background-size: 400% 400%;
    }
    &.desktop {
      width: 50%;
      flex-flow: row;
      justify-content: space-between;
      > div {
        margin: 0 40px;
        cursor: pointer;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
