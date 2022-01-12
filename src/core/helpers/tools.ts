export namespace App {
  export const Methods = {
    deleteCookie(name: string): void {
      const date = new Date();
      date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000); // Set it expire in -1 days
      document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`;
    },
    getCookie(name: string): string | null {
      const nameLenPlus = name.length + 1;
      return (
        document.cookie
          .split(';')
          .map((c) => c.trim())
          .filter((cookie) => {
            return cookie.substring(0, nameLenPlus) === `${name}=`;
          })
          .map((cookie) => {
            return decodeURIComponent(cookie.substring(nameLenPlus));
          })[0] || null
      );
    },
    setCookie({ name, value, days }: { name: string; value: string; days?: number }): void {
      const date = new Date();
      // Set it expire in X days
      date.setTime(date.getTime() + (days ?? 7) * 24 * 60 * 60 * 1000);
      let cookie = `${name}=${value};`;
      if (days) {
        cookie += `expires=${date.toUTCString()};`;
      }
      cookie += 'path=/';
      document.cookie = cookie;
    },
  };
}
export namespace Browser {
  export const Methods = {
    isMobile(): boolean {
      return /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
  };
}
