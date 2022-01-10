export namespace Browser {
  export const Methods = {
    isMobile(): boolean {
      return /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
  };
}
