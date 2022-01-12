import { sessionManager } from '@/core/modules/session';

class AppController {
  public async initialize() {
    sessionManager.initialize();
  }
}

export const appController = new AppController();
