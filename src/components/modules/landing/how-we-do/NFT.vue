<template>
  <div class="nft-container">
    <Box>
      <div class="box-content">
        <div class="header">
          <span class="icon">
            <img :src="require('@/assets/icons/landing/nft.svg')" alt="unity logo" />
          </span>
          <h3 class="title">NON FUNGIBLE TOKEN</h3>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare, ipsum sed mollis placerat, ligula elit
            blandit erat, eget maximus purus purus quis lectus. Etiam et tristique augue. Phasellus ex metus, iaculis
            nec erat at, sollicitudin posuere quam.
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
  name: 'NFT',
  components: {
    Box,
  },
});
</script>

<style lang="scss" scoped>
.nft-container {
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
