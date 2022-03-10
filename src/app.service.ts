import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No Google User';
    }
    return {
      message: 'Google User',
      user: req.user,
    };
  }
  googleUser(req) {
    return {
      user: req.user,
    };
  }
}
