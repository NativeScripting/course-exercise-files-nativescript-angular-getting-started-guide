import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    private getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": Config.appUserHeader,
        });
    }
}
