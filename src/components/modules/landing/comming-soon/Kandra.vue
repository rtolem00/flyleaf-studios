<template>
  <div class="kandra-container" :class="{ desktop: !isMobile }">
    <div class="header-container" :data-aos="TransitionType.ZOOM_IN">
      <div class="background-video" v-if="!isMobile">
        <video
          autoplay
          playsinline
          loop
          muted
          class="video"
          :src="require('@/assets/videos/landing/trailer-resume.mp4')"
        ></video>
        <div class="bg"></div>
      </div>
      <img :src="require('@/assets/img/landing/kandra-logo.png')" alt="kandra logo" />
      <div class="kandra-introduction">
        <p>
          Kandra: The Moonwalker is a 3D platformer demo inspired by the great classics of Nintendo 64 and PlayStation
          like Spyro or Banjo Kazooie. In Kandra's universe the other Moonwalkers have disappeared and with them the
          magic has diseppeared. Kandra's goal as one of the last remaining Moonwalkers is to find her friends and
          recover the magic feathers.
        </p>
      </div>
      <Links v-if="!isMobile" />
    </div>
    <div class="game-resume">
      <div class="collectables" :data-aos="TransitionType.FADE_RIGHT">
        <div class="header-game-resume">
          <h3 class="title">Find collectibles!</h3>
          <div class="description">
            <p>
              Collect feathers, gems and other collectibles to unlock abilities, open portals and progress towards your
              goal: collecting all the magic feathers and returning magic to the world.
            </p>
          </div>
        </div>

        <video
          autoplay
          playsinline
          loop
          muted
          class="video"
          :src="require('@/assets/videos/landing/collectables.mp4')"
        ></video>
      </div>
      <div class="defeat-enemies" :data-aos="TransitionType.FADE_LEFT">
        <div class="header-game-resume">
          <h3 class="title">Defeat enemies and bosses!</h3>
          <div class="description">
            <p>
              Fight against enemies that want to block your waym, from mere minions to bosses. Use different skills for
              different combat situations.
            </p>
          </div>
        </div>

        <video
          autoplay
          playsinline
          loop
          muted
          class="video"
          :src="require('@/assets/videos/landing/defeat_enemies.mp4')"
        ></video>
      </div>
      <div class="new-skills" :data-aos="TransitionType.FADE_RIGHT">
        <div class="header-game-resume">
          <h3 class="title">Get new skills for Kandra!</h3>
          <div class="description">
            <p>Unlock new skills to face enemies in new ways and overcome environmental challenges.</p>
          </div>
        </div>
        <video
          autoplay
          playsinline
          loop
          muted
          class="video"
          :src="require('@/assets/videos/landing/new_skills.mp4')"
        ></video>
      </div>
      <div class="explore" :data-aos="TransitionType.FADE_LEFT">
        <div class="header-game-resume">
          <h3 class="title">Explore the different worlds and bring back the magic!</h3>
          <div class="description">
            <p>
              Explore worlds, help their inhabitants, beat the bad guys and collect gems and feathers to restore order.
            </p>
          </div>
        </div>

        <video
          autoplay
          playsinline
          loop
          muted
          class="video"
          :src="require('@/assets/videos/landing/explore.mp4')"
        ></video>
      </div>
    </div>
    <Links v-if="isMobile" />
  </div>
</template>
<script lang="ts">
import Links from '@/components/modules/landing/comming-soon/Links.vue';
import { TransitionType } from '@/core/funnel/landing/types';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Kandra',
  components: {
    Links,
  },
  setup() {
    return { TransitionType, isMobile: sessionManager.isMobile };
  },
});
</script>

<style lang="scss" scoped>
.kandra-container {
  color: #fff;
  width: 100%;
  padding: 0 20px;
  .header-container {
    img {
      width: 100%;
    }
    .kandra-introduction {
      p {
        padding: 0 20px;
      }
    }
  }
  .game-resume {
    > div {
      margin: 100px 0;
      text-align: left;
    }
    .explore {
      margin-bottom: 50px;
    }

    .header-game-resume {
      padding: 0 20px;
      .title {
        font-size: 26px;
        color: $title-purple;
      }
      .description {
        p {
          margin-bottom: 50px;
        }
      }
    }
    .video {
      width: 100vw;
    }
  }

  &.desktop {
    padding: 0;
    position: relative;

    .header-container {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      position: relative;
      overflow: hidden;
      margin-bottom: 100px;
      .background-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        video {
          width: 100%;
        }
        .bg {
          width: 100%;
          height: 100%;
          background-color: $opaque-background-strong;
          top: 0;
          left: 0;
          position: absolute;
        }
      }
      img {
        width: 25%;
      }
      .kandra-introduction {
        width: 50%;
        font-size: 18px;
        p {
          margin-top: 0;
        }
      }
    }
    .game-resume {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: auto;
      > div {
        margin: 0;
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        video {
          width: 50%;
          padding: 0 50px;
        }
        .header-game-resume {
          width: 50%;
          padding: 0 10%;
        }
      }
      > div:nth-child(odd) {
        .header-game-resume {
          order: 1;
        }
        video {
          order: 2;
        }
      }
      > div:nth-child(even) {
        .header-game-resume {
          order: 2;
        }
        video {
          order: 1;
        }
      }
    }
  }
}
</style>
