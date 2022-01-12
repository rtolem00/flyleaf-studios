<template>
  <teleport to="body">
    <div class="modal-mask" :data-aos="TransitionType.ZOOM_IN">
      <div class="modal-bg" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-slot">
          <div class="slot-wrapper">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { TransitionType } from '@/core/funnel/landing/types';
import { defineComponent, onBeforeUnmount, onMounted } from 'vue';

export default defineComponent({
  name: 'GenericModal',
  emits: ['close'],

  setup() {
    onMounted(() => {
      // Do not show overflow if there are remainding modals opened
      document.body.style.overflowY = 'hidden';
    });
    onBeforeUnmount(() => {
      // Restore overflow status
      if (document.body) document.body.style.overflowY = 'auto';
    });
    return {
      TransitionType,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #013;
  opacity: 0.7;
}
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  transition-duration: 366ms;
  z-index: 9999;
  .modal-slot {
    max-height: 90vh;
    position: relative;
    background: white;
    margin: 0 auto;
    overflow-y: auto;
    max-width: 600px;
    .slot-wrapper {
      padding: 25px;
    }
    @media screen and (min-width: $breakpoint-tablet-width) {
      &::-webkit-scrollbar {
        display: none;
      }
    }
    @media screen and (max-width: $breakpoint-mobile-width) {
      overflow-y: auto;
      overflow-x: hidden;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: fixed;
      width: 100%;
      max-height: 100vh;
    }
  }
  .modal-wrapper {
    position: relative;
    width: fit-content;
    margin: auto;
    @media screen and (min-width: $breakpoint-mobile-width) {
      top: 50%;
      transform: translateY(-50%);
    }
  }
  body {
    overflow: hidden !important;
  }
  #app {
    overflow: scroll;
  }
}
//Fixes Firefox only horizonal scroll (x) on modals
@-moz-document url-prefix() {
  .modal-slot {
    overflow-x: hidden;
  }
}
</style>
