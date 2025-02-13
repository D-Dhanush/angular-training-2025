import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('auth interceptor');
  let clonereq=req.clone({
    setHeaders:{
      // Authorization:'D authorizing'
       Authorization:`Bearer ${'jwt'}`
    }
  })
  return next(clonereq);
};
