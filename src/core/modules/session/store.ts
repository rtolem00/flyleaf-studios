import { PersistentStore } from '@/core/definitions/store';

const SESSION_STORAGE_NAME = 'session_flylead';

export type State = Record<string, unknown>;

export class SessionStore extends PersistentStore<State> {
  protected data(): State {
    return {};
  }

  constructor() {
    super(SESSION_STORAGE_NAME);
  }
}
