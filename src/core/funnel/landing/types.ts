export type CompanyValue = {
  title: string;
  text: string;
  icon: string;
};

export enum TransitionType {
  NONE = '',
  FADE_UP = 'fade-up',
  FADE_DOWN = 'fade-down',
  FADE_RIGHT = 'fade-right',
  FADE_LEFT = 'fade-left',
  FLIP_UP = 'flip-up',
  FLIP_DOWN = 'flip-down',
  FLIP_LEFT = 'flip-left',
  FLIP_RIGTH = 'flip-right',
  ZOOM_IN = 'zoom-in',
}
