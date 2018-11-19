import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { tap, catchError } from "rxjs/operators";
import { throwError } from 'rxjs';

import { User } from './user';
import { Config } from '../config';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    public register(user: User) {
        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey,
            JSON.stringify({
                username: user.email,
                email: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        );
    }

    public login(user: User) {
        return this.http.post(
            Config.apiUrl + "user/" + Config.appKey + "/login",
            JSON.stringify({
                username: user.email,
                password: user.password
            }),
            { headers: this.getCommonHeaders() }
        )
            .pipe(
                tap((data: any) => {
                    Config.token = data._kmd.authtoken;
                }),
                catchError(this.handleErrors)
            );
    }

    private getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": Config.appUserHeader,
        });
    }

    private handleErrors(error: HttpErrorResponse) {
        console.log(JSON.stringify(error));
        return throwError(error);
    }
}
