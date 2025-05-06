import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { catchError, Observable, of } from "rxjs"

export interface Vechicle{
    Type: string,
  	Mark: string,
    Model: string,
    Color: string,
    Year: number,
    Body: string,
    Sport: boolean,
    VIN: number,
  	Damaged: boolean
}
export interface Owner{
NumberDocumnent: any
    Name: string,
    Last_Name: string,
    Document: string,
    NumberDocument: number,
    Birth_Date: string,
    Vechicle: Array<Vechicle>
}

@Injectable({providedIn:'root'})
export class OwnerService 
{
    constructor(private http: HttpClient){}
    getInfo() : Observable<Array<Owner>>{
        return this.http.get<Array<Owner>>('assets/info.json')
        .pipe(catchError(err => 
            {console.log(err);
                return of([]);
            }));
    }
}