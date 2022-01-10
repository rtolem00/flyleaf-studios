<template>
  <div id="blockchain-container">
    <Box>
      <div class="box-content">
        <div class="header">
          <span class="icon">
            <img :src="require('@/assets/icons/landing/blockchain.svg')" alt="unity logo" />
          </span>
          <h3 class="title">BLOCKCHAIN TECHNOLOGY</h3>
        </div>
        <div class="description">
          <p>
            Implement blockchain technology to take your product experience to the next level. Blockchain-based gaming
            development unleashes the potential of decentralized ownership of in-game assets, providing full control of
            transfer and use properties in virtual goods.
          </p>
        </div>
      </div>
    </Box>
  </div>
</template>
<script lang="ts">
import Box from '@/components/generics/UI/Box.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Unity',
  components: {
    Box,
  },
});
</script>

<style lang="scss" scoped>
#blockchain-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  .box-content {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .header {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 128px;
        height: 128px;
        display: flex;
        justify-content: center;
        img {
          width: 90px;
        }
      }
      .title {
        color: $title-purple;
        margin: 0;
      }
    }
    .description {
      text-align: center;
    }
  }
}
</style>
