import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const juryGuard: CanActivateFn = (route, state) => {
  
  const Token = localStorage.getItem("token");
  if(Token !== null){
    const tokenPayload = jwtDecode(Token);
    console.log("role decoded " + tokenPayload.roles);
    if(tokenPayload.roles === '[Jury]' || tokenPayload.roles === '[Manager]'){
        return true;
    }
    const route = inject(Router);
    route.navigate(['/']);
    return false;    
  }else{
    const routee = inject(Router);
    routee.navigate(['/']);
    return false;
  }
  return true;


};
