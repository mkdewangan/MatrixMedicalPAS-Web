import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = localStorage.token; // you probably want to store it in localStorage or something
     
    let token = sessionStorage.getItem("token");
    console.log("AuthInterceptor token " + token);
    
    if (!token) {
      console.log("if (!token) { " + token);
      return next.handle(req);
    }

    token = token.substr(1, (token.length-2));
    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  

/*
return next.handle(req1).pipe(
  map(event => {
    if (event instanceof HttpResponse) {
      event = event.clone({
        headers: event.headers.set('Access-Control-Allow-Origin', '*')
      });
    }
    return event;
  })
);*/


  }

}



