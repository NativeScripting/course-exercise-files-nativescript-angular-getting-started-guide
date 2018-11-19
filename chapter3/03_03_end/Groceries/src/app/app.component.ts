import { Component } from "@angular/core";
import { User } from './shared/user/user';

@Component({
    selector: "gr-main",
    templateUrl: 'app/pages/login/login.component.html',
    styleUrls: ['app/pages/login/login-common.css', 'app/pages/login/login.css']
})
export class AppComponent {
    public user: User;
    public isLoggingIn = true;

    constructor() {
        this.user = new User();
    }

    public submit() {
        alert('You\'re using: ' + this.user.email);
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
