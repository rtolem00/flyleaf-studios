import { PersistentStore } from '@/core/definitions/store';

const SESSION_STORAGE_NAME = 'session_flylead';

export interface State extends Record<string, unknown> {
  cookiesAccepted: boolean;
}

export class SessionStore extends PersistentStore<State> {
  protected data(): State {
    return {
      cookiesAccepted: false,
    };
  }

  constructor() {
    super(SESSION_STORAGE_NAME);
  }

  public setCookiesAccepted(value: boolean) {
    this._state.cookiesAccepted = value;
  }
}
