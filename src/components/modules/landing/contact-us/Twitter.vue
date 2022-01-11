<template>
  <div id="twitter-container">
    <div class="icon">
      <img :src="require('@/assets/icons/landing/twitter.svg')" alt="twitter logo" />
    </div>
    <Box :blackBackground="true">
      <div class="header">
        <h3 class="title">Twitter</h3>
      </div>
      <div class="redirection">
        <span>Tweet us.</span>
        <a href="https://twitter.com/FlyleafStudios" target="_blank">DM Us</a>
      </div>
    </Box>
  </div>
</template>

<script lang="ts">
import Box from '@/components/generics/UI/Box.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Twitter',
  components: {
    Box,
  },
  props: {
    blackBackground: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
#twitter-container {
  position: relative;
  .icon {
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .redirection {
    color: #fff;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    a {
      text-decoration: none;
      color: #fff;
      background: linear-gradient(-45deg, $grey-background, #364352, #367386, #35a7a8, $title-blue);
      background-size: 400% 400%;
      animation: gradient_animation 4s ease infinite;
      padding: 10px 30px;
      cursor: pointer;
      border-radius: 20px;
      margin-top: 20px;
    }
  }
}
</style>
