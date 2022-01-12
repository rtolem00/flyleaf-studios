<template>
  <div id="acceptcookies-container">
    <div class="accept-cookies">
      <p class="text">
        This website uses cookies and/or similar technologies that store and retrieve information when you browse.
        Cookies allow a website, among other things, to store and retrieve information about the browsing habits of a
        User or their equipment and, depending on the information it contains and the way you use your computer, can be
        used to recognize the User.
        <span @click="onUpdateShowModal(LegalTypes.COOKIES)" class="more-info">More info</span>
      </p>
      <span class="accept btn" @click="setCookie">Accept Cookies</span>
    </div>
    <Modal @close="onUpdateShowModal(LegalTypes.COOKIES)" v-if="showCookies">
      <div>
        <h2>Cookie Policy</h2>
        <div class="section cookie-policy">
          <h3>COOKIE POLICY</h3>
          <p>
            In accordance with the provisions of Article 22.2 of Law 34/2002, of July 11, 2002, on Information Society
            Services and Electronic Commerce (LSSI-CE) in force, FLYLEAF STUDIOS SL must comply with the obligation to
            inform about the cookies it uses and their purposes.
          </p>
          <p>
            This website uses cookies and/or similar technologies that store and retrieve information when you browse.
            Cookies allow a website, among other things, to store and retrieve information about the browsing habits of
            a User or their equipment and, depending on the information it contains and the way you use your computer,
            can be used to recognize the User.
          </p>
          <p>
            Cookies are essential for the functioning of the Internet, providing countless advantages in the provision
            of interactive services, facilitating the User the navigation and usability of our website.
          </p>
          <p>
            The user can modify the Personalized Configuration. The information provided below will help you understand
            the different types of cookies:
          </p>
          <p>
            Please note that if you accept third-party cookies, you must delete them from the browser options or from
            the system offered by the third party itself.
          </p>
          <p>
            Below we provide links to various browsers, through which you can modify the settings of your browser on the
            use of cookies:
          </p>
          <ul>
            <li>
              Firefox:
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                >Enable and disable cookies that websites use to track your preferences | Firefox Help (mozilla.org).</a
              >
            </li>
            <li>
              Chrome:
              <a href="https://support.google.com/chrome/answer/95647"
                >Delete, enable and manage cookies in Chrome - Computer - Google Chrome Help</a
              >
            </li>
            <li>
              Explorer:
              <a
                href="https://support.microsoft.com/en-gb/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                >Delete and manage cookies</a
              >
            </li>
            <li>
              Safari from here:
              <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac"
                >Manage cookies and website data in Safari on Mac - Apple Support (IE)</a
              >
            </li>
            <li>
              Opera from here:
              <a href="https://help.opera.com/en/latest/web-preferences/#cookies">Web preferences - Opera Help</a>
            </li>
          </ul>
          <p>
            For more information about the processing of personal data, we recommend you visit our "Privacy Policy"
            section.
          </p>
        </div>
        <div @click="onUpdateShowModal(LegalTypes.COOKIES)" class="close-button">Close</div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Modal from '@/components/generics/UI/Modal.vue';
import logicComposable, { LegalTypes } from '@/core/components-logic/logicLegalModals';
import { App } from '@/core/helpers/tools';
import { sessionManager } from '@/core/modules/session';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AcceptCookies',
  components: {
    Modal,
  },
  setup() {
    const { showCookies, onUpdateShowModal } = logicComposable();

    const setCookie = () => {
      App.Methods.setCookie({ name: 'flyleaf_cookies_accepted', value: 'true' });
      sessionManager.setCookiesAccepted();
    };
    return {
      showCookies,
      LegalTypes,
      onUpdateShowModal,
      setCookie,
    };
  },
});
</script>

<style lang="scss" scoped>
#acceptcookies-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  .accept-cookies {
    width: 1200px;
    flex-flow: column;
    max-width: 100%;
    background-color: #fff;
    padding: 32px;
    display: flex;
    .text {
      line-height: 1.4em;
      .more-info {
        font-weight: bold;
        text-decoration: underline;
      }
    }
    .accept.btn {
      margin: auto;
      cursor: pointer;
      padding: 10px 20px;
      display: flex;
      border-radius: 20px;
      background-color: $title-blue;
      color: #fff;
      cursor: pointer;
    }
  }
}
.close-button {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: $title-blue;
  color: #fff;
  width: 50%;
  cursor: pointer;
  margin: auto;
}
</style>
