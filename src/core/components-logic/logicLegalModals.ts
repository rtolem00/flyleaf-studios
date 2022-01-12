import { reactive, toRefs } from 'vue';

export enum LegalTypes {
  LEGAL_WARNING = 'showLegalNotes',
  PRIVACY_POLICY = 'showPrivacyPolicy',
  COOKIES = 'showCookies',
}

const legalModals = reactive({
  [LegalTypes.LEGAL_WARNING]: false,
  [LegalTypes.PRIVACY_POLICY]: false,
  [LegalTypes.COOKIES]: false,
});

export default function () {
  function onUpdateShowModal(type: LegalTypes): void {
    legalModals[type] = !legalModals[type];
    const keys = Object.keys(legalModals).filter((b) => b !== type);
    for (const k of keys) {
      legalModals[k] = false;
    }
  }

  return {
    ...toRefs(legalModals),
    onUpdateShowModal,
  };
}
