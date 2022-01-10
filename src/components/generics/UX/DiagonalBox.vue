<template>
  <div
    class="diagonal-box-container"
    :class="{
      reverse: reverse,
      'grey-background': greyBackground,
    }"
  >
    <div class="box">
      <div class="title">
        <h3>{{ title }}</h3>
      </div>
      <div class="text">
        <span> {{ text }} </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiagonalBox',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    greyBackground: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style lang="scss" scoped>
.diagonal-box-container {
  display: flex;
  flex-flow: row;
  justify-content: stretch;
  align-items: center;
  height: 100%;
  &.grey-background {
    background-color: $grey-background;
  }
  &:not(.reverse) {
    -webkit-transform: skewY(167deg);
    -moz-transform: skewY(167deg);
    -ms-transform: skewY(167deg);
    -o-transform: skewY(167deg);
    transform: skewY(167deg);
    .box {
      -webkit-transform: skewY(-167deg);
      -moz-transform: skewY(-167deg);
      -ms-transform: skewY(-167deg);
      -o-transform: skewY(-167deg);
      transform: skewY(-167deg);
    }
  }
  &.reverse {
    -webkit-transform: skewY(-167deg);
    -moz-transform: skewY(-167deg);
    -ms-transform: skewY(-167deg);
    -o-transform: skewY(-167deg);
    transform: skewY(-167deg);
    .box {
      -webkit-transform: skewY(167deg);
      -moz-transform: skewY(167deg);
      -ms-transform: skewY(167deg);
      -o-transform: skewY(167deg);
      transform: skewY(167deg);
    }
  }
  .box {
    padding: 0 20px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    width: 100%;
    .title {
      color: $title-purple;
      h3 {
        margin-top: 0;
        font-size: 25px;
      }
    }
    .text {
      max-width: 600px;
    }
  }
}
</style>
