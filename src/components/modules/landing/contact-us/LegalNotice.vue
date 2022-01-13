<template>
  <div id="legalwarning-container">
    <span @click="onUpdateShowModal(LegalTypes.LEGAL_WARNING)">Legal Notice</span>
    <Modal @close="onUpdateShowModal(LegalTypes.LEGAL_WARNING)" v-if="showLegalNotes">
      <div>
        <h2>Legal Notice</h2>
        <div class="section introduction">
          <h3>INTRODUCTION</h3>
          <p>
            In compliance with Law 34/2002, of July 11, 2002, of Information Society Services and Electronic Commerce
            (LSSI-CE), FLYLEAF STUDIOS SL informs that it is the owner of the website. In accordance with the
            requirements of article 10 of the aforementioned Law, FLYLEAF STUDIOS SL informs of the following data:
          </p>
          <ul>
            <li>COMPANY NAME: FLYLEAF STUDIOS SL</li>
            <li>VAT ID: B42934844</li>
            <li>POSTAL ADDRESS: CALLE JOSEP MARTINEZ, 19, 07004, PALMA DE MALLORCA (ILLES BALEARS)</li>
            <li>EMAIL ADDRESS: ceo@flyleafs.es</li>
            <li>TELEPHONE: 606784555</li>
            <li>COMMERCIAL REGISTRY: volume 2887, folio 128, page PM-90465 and inscription 1ª.</li>
            <li>WEB DOMAIN: www.flyleafs.com</li>
            <li>MAIN PURPOSE: Publishing of video games.</li>
          </ul>
        </div>
        <div class="section user-responsibilities">
          <h3>USER AND REGIME OF RESPONSIBILITIES</h3>
          <p>
            The navigation, access and use of <b>FLYLEAF STUDIOS SL</b>'s website confers the condition of user, by
            which the user accepts, from the navigation through <b>FLYLEAF STUDIOS SL</b>'s website, all the conditions
            of use established here without prejudice to the application of the corresponding regulations of obligatory
            legal compliance as the case may be.
          </p>
          <p>
            The website of <b>FLYLEAF STUDIOS SL</b> provides a wide range of information, services and data. The user
            assumes responsibility for the correct use of the website. This responsibility will extend to:
          </p>
          <p>
            The truthfulness and legality of the information provided by the user in the forms extended by
            <b>FLYLEAF STUDIOS SL</b> for access to certain content or services offered by the website.
          </p>
          <p>
            The use of the information, services and data offered by <b>FLYLEAF STUDIOS SL</b> contrary to the
            provisions of these conditions, the Law, morality, good customs or public order, or that in any other way
            may involve damage to the rights of third parties or the operation of the website.
          </p>
        </div>
        <div class="section link-policy">
          <h3>LINK POLICY AND DISCLAIMERS</h3>
          <p>
            <b>FLYLEAF STUDIOS SL</b> is not responsible for the content of the websites that the user can access
            through the links established on its website and declares that under no circumstances will it examine or
            exercise any type of control over the content of other websites. Likewise, it does not guarantee the
            technical availability, accuracy, veracity, validity or legality of sites outside its property which can be
            accessed through the links.
          </p>
          <p>
            <b>FLYLEAF STUDIOS SL</b> declares to have adopted all necessary measures to avoid any damage to users of
            its website, which may arise from browsing its website. Consequently, FLYLEAF STUDIOS SL is not responsible,
            in any case, for the eventual damages that the user may suffer while surfing the Internet.
          </p>
        </div>
        <div class="section modifications">
          <h3>MODIFICATIONS</h3>
          <p>
            <b>FLYLEAF STUDIOS SL</b> reserves the right to make any changes it deems appropriate, without prior notice,
            to the content of its website. Both with regard to the contents of the web site, as well as in the
            conditions of use of the same, or in the general contracting conditions. Such modifications may be made
            through its website by any means admissible by law and shall be binding during the time they are published
            on the web and until they are not validly modified by subsequent ones.
          </p>
        </div>
        <div class="section industrial-property">
          <h3>INTELLECTUAL AND INDUSTRIAL PROPERTY</h3>
          <p>
            <b>FLYLEAF STUDIOS SL</b> itself or as an assignee, owns all intellectual and industrial property rights of
            its website, as well as the elements contained therein (including but not limited to images, sound, audio,
            video, software or texts; trademarks or logos, color combinations, structure and design, selection of
            materials used, computer programs necessary for its operation, access and use, etc.), owned by
            <b>FLYLEAF STUDIOS SL</b>. They will be, therefore, works protected as intellectual property by the Spanish
            legal system, being applicable to them both the Spanish and Community regulations in this field, as well as
            the international treaties related to the matter and signed by Spain.
          </p>
          <p>
            All rights reserved. Under the provisions of the Intellectual Property Law, are expressly prohibited
            reproduction, distribution and public communication, including its mode of making available, all or part of
            the contents of this website, for commercial purposes, in any medium and by any technical means, without the
            authorization of <b>FLYLEAF STUDIOS SL</b>.
          </p>
          <p>
            The user undertakes to respect the Intellectual and Industrial Property rights owned by
            <b>FLYLEAF STUDIOS SL</b>. You can view the elements of the portal and even print, copy and store them on
            the hard drive of your computer or any other hardware provided it is solely and exclusively for your
            personal and private use. The user must refrain from deleting, altering, evading or manipulating any
            protection device or security system that was installed on the pages of <b>FLYLEAF STUDIOS SL</b>.
          </p>
        </div>
        <div class="section ssl">
          <h3>SSL CERTIFICATE (SECURE SOCKETS LAYER)</h3>
          <p>
            The SSL CERTIFICATE provides authentication, privacy and information security between
            <b>FLYLEAF STUDIOS SL</b> and the user.
          </p>
          <p>
            <b>FLYLEAF STUDIOS SL</b> has a security certificate that is used by SSL CERTIFICATE to make secure
            connections.
          </p>
          <p>
            In this process several parameters are established to make the connection securely and is established using
            pre-established keys, encrypting and decrypting all data sent until the connection is closed.
          </p>
        </div>
        <div class="section legal-actions">
          <h3>SSL CERTIFICATE (SECURE SOCKETS LAYER)</h3>
          <p>
            <b>FLYLEAF STUDIOS SL</b> also reserves the right to bring any civil or criminal actions it deems
            appropriate for the improper use of its website and content, or for breach of these conditions.
          </p>
          <p>
            The relationship between the user and the provider shall be governed by the regulations in force and
            applicable in the Spanish territory. Should any dispute arise, the parties may submit their disputes to
            arbitration or go to the ordinary jurisdiction in compliance with the rules on jurisdiction and competence
            in this regard. <b>FLYLEAF STUDIOS SL</b> is domiciled in ILLES BALEARS, Spain.
          </p>
          <p>
            Contracts concluded by electronic means in which a consumer intervenes as a party shall be presumed to have
            been concluded in the place where the consumer has his or her habitual residence.
          </p>
          <p>
            Electronic contracts between entrepreneurs or professionals, in the absence of agreement between the
            parties, shall be presumed to have been concluded in the place where the service provider is established.
          </p>
        </div>
        <div @click="onUpdateShowModal(LegalTypes.LEGAL_WARNING)" class="close-button">Close</div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Modal from '@/components/generics/UI/Modal.vue';
import logicComposable, { LegalTypes } from '@/core/components-logic/logicLegalModals';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LegalNotice',
  components: {
    Modal,
  },
  setup() {
    const { showLegalNotes, onUpdateShowModal } = logicComposable();
    return {
      showLegalNotes,
      LegalTypes,
      onUpdateShowModal,
    };
  },
});
</script>

<style lang="scss" scoped>
#legalwarning-container {
  > span {
    cursor: pointer;
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
