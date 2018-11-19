import { Component } from "@angular/core";
import { User } from './shared/user/user';
import { UserService } from './shared/user/user.service';

@Component({
    selector: "gr-main",
    providers: [UserService],
    templateUrl: 'app/pages/login/login.component.html',
    styleUrls: ['app/pages/login/login-common.css', 'app/pages/login/login.css']
})
export class AppComponent {
    public user: User;
    public isLoggingIn = true;

    constructor(private userService: UserService) {
        this.user = new User();
    }

    public submit() {
        if (this.isLoggingIn) {
            this.login()
        } else {
            this.signUp();
        }
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    private login() {
        // TODO: Define
    }

    private signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert('Your account was successfully created.');
                    this.toggleDisplay();
                },
                () => alert('Unfortunately we were unable to create your account.')
            );
    }
}
