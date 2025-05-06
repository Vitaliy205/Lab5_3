import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor()
    {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                let errmsg = '';
                if(error.error instanceof ErrorEvent){
                    console.log("this is client side error");
                    errmsg = "Error " + error.error.message;
                }
                else{
                    console.log("this is server side error");
                    errmsg = "Error code: " + error.status + ", Message: " + error.message;
                }
                console.log(errmsg);
                return throwError(() => Error(errmsg));
            })
        )
    }

}