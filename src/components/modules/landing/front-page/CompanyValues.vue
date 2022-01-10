<template>
  <div class="container-values" :class="{ desktop: !isMobile }">
    <div class="header" :data-aos="TransitionType.FADE_UP">
      <h2>Company Values</h2>
    </div>
    <div class="company-values-container">
      <div class="company-value" v-for="(companyValue, index) in companyValues" :key="`cv-${companyValue.title}`">
        <DiagonalBox
          :reverse="index == 2"
          :title="companyValue.title"
          :text="companyValue.text"
          :greyBackground="!isOdd(index)"
          :data-aos="getTransition(index)"
          v-if="isMobile"
        />
        <Box v-else :data-aos="TransitionType.ZOOM_IN">
          <div class="box-content">
            <div class="box-header">
              <span class="icon">
                <img :src="require(`@/assets/icons/landing/${companyValue.icon}`)" alt="company value icon" />
              </span>
              <h3 class="title">{{ companyValue.title }}</h3>
            </div>
            <div class="description">
              <p>
                {{ companyValue.text }}
              </p>
            </div>
          </div>
        </Box>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Box from '@/components/generics/UI/Box.vue';
import DiagonalBox from '@/components/generics/UX/DiagonalBox.vue';
import { CompanyValue, TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CompanyValues',
  components: {
    DiagonalBox,
    Box,
  },
  setup() {
    const companyValues: Array<CompanyValue> = [
      {
        title: 'Ambition',
        text: 'It is our initial value, from here we we start by setting out our objectives and where we want to we want to reach with the resources we have.',
        icon: 'ambition.svg',
      },
      {
        title: 'Perseverance',
        text: 'Our second value is the basic pillar on which all our work is based, as it will be in charge of making our objectives and aspirations tangible. aspirations previously objectives and aspirations.',
        icon: 'perseverance.svg',
      },
      {
        title: 'Innovation',
        text: 'Our last value is the result of the two previous ones, which gives us the ability to do something different. It is not only limited to games, it also affects the way we work. also affects the way we work.',
        icon: 'innovation.svg',
      },
    ];

    const isOdd = (num: number) => num % 2 != 0;

    const getTransition = (index: number) => {
      if (!isOdd(index)) return TransitionType.FADE_LEFT;
      return TransitionType.FADE_RIGHT;
    };
    return {
      companyValues,
      isMobile: sessionManager.isMobile,
      getTransition,
      TransitionType,
      isOdd,
    };
  },
});
</script>

<style lang="scss" scoped>
.container-values {
  position: relative;
  .header {
    text-align: center;
    margin-top: 50px;
    color: $title-blue;
    font-size: 25px;
    margin-bottom: 55px;
  }
  .company-values-container {
    .company-value {
      position: relative;
      margin: 20px 0;
      width: 100vw;
      height: 250px;
      .diagonal-box {
        width: 100vw;
        height: 220px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
      }
    }
  }

  &.desktop {
    width: 80%;
    margin: auto;
    .company-values-container {
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: stretch;
      .company-value {
        width: 33%;
        padding: 0 50px;
        height: auto;
        .box-content {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          .box-header {
            display: flex;
            flex-flow: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
            .icon {
              margin-bottom: 10px;
              display: flex;
              justify-content: center;
            }
            .title {
              color: $title-purple;
              margin: 0;
              text-align: center;
            }
          }
          .description {
            color: #fff;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
