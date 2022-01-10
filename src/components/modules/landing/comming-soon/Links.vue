<template>
  <div class="links" :class="{ desktop: !isMobile }">
    <a
      class="watch-trailer btn"
      href="https://www.youtube.com/watch?v=UF1Ylj0txuY&t=52s&ab_channel=JuanGabrielGomilaSalas"
      target="_blank"
    >
      <h3>WATCH TRAILER</h3>
      <span class="icon">
        <img :src="require('@/assets/icons/landing/play.svg')" alt="unity logo" />
      </span>
    </a>
    <a
      class="play-now btn"
      href="https://store.steampowered.com/app/1829200/Kandra_The_Moonwalker/?beta=0"
      target="_blank"
    >
      <span class="icon">
        <img :src="require('@/assets/icons/landing/control.svg')" alt="unity logo" />
      </span>
      <h3>PLAY NOW</h3>
    </a>
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
      text-decoration: none;
      h3 {
        font-size: 20px;
      }
      &.watch-trailer {
        background: linear-gradient(-45deg, $title-purple, #523372, #3b2d56, #2a2539, $grey-background);
        background-size: 400% 400%;
        animation: gradient_animation 7s ease infinite;
      }
      &.play-now {
        background: linear-gradient(-45deg, $grey-background, #364352, #367386, #35a7a8, $title-blue);
        background-size: 400% 400%;
        animation: gradient_animation 7s ease infinite;
      }
      background-size: 400% 400%;
    }
    &.desktop {
      width: 50%;
      flex-flow: row;
      .btn {
        margin: 0 20px;
        cursor: pointer;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
