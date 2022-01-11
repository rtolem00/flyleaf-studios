<template>
  <div id="email-container">
    <div class="icon">
      <img :src="require('@/assets/icons/landing/gmail.svg')" alt="gmail logo" />
    </div>
    <Box :blackBackground="true">
      <div class="header">
        <h3 class="title">Email</h3>
      </div>
      <div class="redirection">
        <span>Drop us a line.</span>
        <a href="mailto:info@flyleafs.es" target="_blank">Send Email</a>
      </div>
    </Box>
  </div>
</template>

<script lang="ts">
import Box from '@/components/generics/UI/Box.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Email',
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
#email-container {
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
      background: linear-gradient(-45deg, $title-purple, #523372, #3b2d56, #2a2539, $grey-background);
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
