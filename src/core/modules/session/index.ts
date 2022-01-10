import { Browser } from '@/core/helpers/tools';
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
}

export const sessionManager = new SessionManager();
