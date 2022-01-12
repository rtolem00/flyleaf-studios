import { App, Browser } from '@/core/helpers/tools';
import { SessionStore, State as StoreState } from '@/core/modules/session/store';

class SessionManager {
  //#region VARIABLES DEFINITION
  private _store: SessionStore = new SessionStore();
  //#endregion VARIABLES DEFINITION

  //#region GETTERS
  get state(): StoreState {
    return this._store.state();
  }
  get isMobile(): boolean {
    return Browser.Methods.isMobile();
  }
  //#endregion

  public async initialize(): Promise<void> {
    this.checkCookies();
  }

  //#region PUBLIC METHODS
  public setCookiesAccepted(): void {
    this._store.setCookiesAccepted(true);
  }
  //#endregion

  //#region PRIVATE METHODS
  private checkCookies(): void {
    const acceptedCookies = App.Methods.getCookie('flyleaf_cookies_accepted') !== null;
    this._store.setCookiesAccepted(acceptedCookies);
  }
  //#endregion
}

export const sessionManager = new SessionManager();
