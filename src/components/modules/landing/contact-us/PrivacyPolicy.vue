<template>
  <div id="privacypolicy-container">
    <span @click="onUpdateShowModal(LegalTypes.PRIVACY_POLICY)">Privacy Policy</span>
    <Modal @close="onUpdateShowModal(LegalTypes.PRIVACY_POLICY)" v-if="showPrivacyPolicy">
      <div>
        <h2>Privacy Policy</h2>
        <div class="section privacy-policy">
          <h3>PRIVACY POLICY</h3>
          <p>
            In accordance with the provisions of current and applicable regulations on the protection of personal data
            and Law 34/2002, of July 11, Services Information Society and Electronic Commerce (LSSI-CE), FLYLEAF STUDIOS
            SL informs users, which has proceeded to create a profile in / s Social Network / s Facebook, Twitter and
            Instagram, with the main purpose of advertising their products and services. Data of the owner of the
            website:
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
        <div class="section data">
          <h3>DATA PROTECTION</h3>
          <p>
            In accordance with the current and applicable regulations on personal data protection, we inform you that
            your data will be incorporated into the processing system owned by FLYLEAF STUDIOS SL with NIF B42934844 and
            registered office located at CALLE JOSEP MARTINEZ, 19, 07004, PALMA DE MALLORCA (ILLES BALEARS), and that
            their respective purposes, retention periods and legitimate bases are listed below. For those treatments
            that require it, it is also informed of the possible profiling and automated decisions, as well as the
            possible assignments and international transfers that FLYLEAF STUDIOS SL plans to carry out:
          </p>
          <p>TREATMENTS CARRIED OUT:</p>
          <p>Management of the website:</p>
          <ul>
            <li>Purpose: Processing and management of data necessary for the functionality of the website.</li>
            <li>Retention period: as long as the consent given.</li>
            <li>Legitimate basis: The consent of the data subject.</li>
            <li>Type of data: Merely identifying data.</li>
            <li>Transfers: Not foreseen.</li>
            <li>International transfers: Not foreseen.</li>
            <li>Profiling: Not foreseen.</li>
          </ul>
          <p>Web form:</p>
          <ul>
            <li>Purpose: To answer your queries and/or requests.</li>
            <li>Retention period: as long as the consent given is maintained.</li>
            <li>Legitimate basis: The consent of the interested party.</li>
            <li>Type of data: Merely identifying data.</li>
            <li>Transfers: None.</li>
            <li>International transfers: Not foreseen.</li>
            <li>Profiling: Not foreseen.</li>
          </ul>
          <p>Management of regulatory compliance:</p>
          <ul>
            <li>
              Purpose: Management and processing of obligations and duties arising from compliance with the regulations
              to which the entity is subject.
            </li>
            <li>
              Retention period: Retention of copies of documents until the statute of limitations for claiming possible
              liability expires.
            </li>
            <li>Legitimate basis: compliance with a law.</li>
            <li>Type of data: Merely identifying data.</li>
            <li>
              Transfers: your data will be communicated if necessary to agencies and / or public administration with
              competence in the matter in order to comply with the obligations established in the applicable
              regulations. In addition, it is reported that the legitimate basis for the transfer is to comply with the
              obligations established in the applicable regulations.
            </li>
            <li>International transfers: Not foreseen.</li>
            <li>Profiling: Not foreseen.</li>
          </ul>
          <p>Newsletters:</p>
          <ul>
            <li>
              Purpose: Collection, registration and processing of data for marketing purposes in order to send the
              corresponding Newsletter to which you have subscribed.
            </li>
            <li>Retention period: as long as the consent given is maintained.</li>
            <li>Legitimate basis: the consent of the data subject.</li>
            <li>Type of data: Merely identifying data.</li>
            <li>Transfers: None.</li>
            <li>International transfers: Not foreseen.</li>
            <li>Profiling: Not foreseen.</li>
          </ul>
          <p>Commercial Actions:</p>
          <ul>
            <li>
              Purpose: Collection, registration and processing of data for the purpose of advertising and commercial
              prospecting of our products and / or services.
            </li>
            <li>Retention period: as long as the consent given is maintained.</li>
            <li>Legitimate basis: the consent of the data subject.</li>
            <li>Type of data: Merely identifying data.</li>
            <li>Transfers: None.</li>
            <li>International transfers: Not foreseen.</li>
            <li>Profiling: Not foreseen.</li>
          </ul>
        </div>
        <div class="section rights">
          <h3>RIGHTS OF DATA SUBJECTS</h3>
          <p>
            In relation to the rights of access, rectification, limitation of processing, deletion, portability and
            opposition to the processing of your personal data, which you have and that can be exercised before FLYLEAF
            STUDIOS SL, in accordance with the RGPD, you must take into account the following nuances:
          </p>
          <ul>
            <li>
              Right of Access: It is the right of the user to obtain information about their specific personal data and
              the treatment that has been carried out or carried out, as well as the information available on the origin
              of such data and communications made or planned thereof.
            </li>
            <li>
              Right of Rectification: It is the right of the affected party to modify the data that turn out to be
              inaccurate or incomplete. It can only be satisfied in relation to information that is under the control of
              FLYLEAF STUDIOS SL, for example, delete comments posted on the page itself, images or web content
              containing personal data of the user.
            </li>
            <li>
              Right to the Limitation of treatment: It is the right to limit the purposes of treatment originally
              provided by the controller.
            </li>
            <li>
              Right of Deletion: The right to delete the user's personal data, except as provided in the RGPD itself or
              in other applicable regulations that determine the mandatory nature of the conservation of the same, in
              time and form.
            </li>
            <li>
              Right of portability: The right to receive the personal data provided by the user, in a structured,
              commonly used and machine-readable format, and to transmit them to another data controller.
            </li>
            <li>
              Right of Opposition: The right of the user not to have his/her personal data processed or to cease the
              processing of such data by FLYLEAF STUDIOS SL.
            </li>
          </ul>
          <p>
            In order to exercise any of the rights described above, you must comply with the following requirements:
          </p>
          <ul>
            <li>
              Name, surname(s) of the interested party and copy of the DNI/NIE or any identifying document. In the
              exceptional cases in which the representation is admitted, it will also be necessary the identification by
              the same means of the person who represents him/her, as well as the document proving the representation.
              The photocopy of the DNI may be substituted provided that the identity is accredited by any other legally
              valid means.
            </li>
            <li>
              Request in which the application is made. (Exercise in which the information to be accessed is requested).
              If you do not refer to a specific file will be provided all the information you have with your personal
              data. If you request information of a specific file, only the information of this file. If you request
              information relating to a third party can never be provided. If you request it by telephone, you will be
              instructed to do it in writing and you will be informed how to do it and the address to which you have to
              send it. You will never be given information over the telephone.
            </li>
            <li>Address for notification purposes.</li>
            <li>Date and signature of the applicant.</li>
            <li>
              The interested party must use any means that allows accreditation of the sending and receipt of the
              request.
            </li>
          </ul>
          <p>
            Finally, we inform you that you have the right to file a complaint with the Spanish Data Protection Agency
            in case you have knowledge or consider that a fact may involve a breach of the applicable regulations on
            data protection.
          </p>
          <p>
            FLYLEAF STUDIOS SL undertakes to adopt the necessary technical and organizational measures, according to the
            level of risks that accompany the processing carried out by them and indicated in the section of the terms
            and conditions of use, so as to ensure its integrity, confidentiality and availability.
          </p>
        </div>
        <div @click="onUpdateShowModal(LegalTypes.PRIVACY_POLICY)" class="close-button">Close</div>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import Modal from '@/components/generics/UI/Modal.vue';
import logicComposable, { LegalTypes } from '@/core/components-logic/logicLegalModals';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PrivacyPolicy',
  components: {
    Modal,
  },
  setup() {
    const { showPrivacyPolicy, onUpdateShowModal } = logicComposable();
    return {
      showPrivacyPolicy,
      LegalTypes,
      onUpdateShowModal,
    };
  },
});
</script>

<style lang="scss" scoped>
#privacypolicy-container {
  > span {
    cursor: pointer;
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
}
</style>
