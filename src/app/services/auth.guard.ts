import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLogin = localStorage.getItem('isLogin');
  const router = inject(Router);
  if (!isLogin) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
