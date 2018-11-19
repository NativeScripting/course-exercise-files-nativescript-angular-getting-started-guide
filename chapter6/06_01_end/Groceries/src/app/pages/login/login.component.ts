import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';
import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color';
import { View } from 'tns-core-modules/ui/core/view';
import { setHintColor } from '../../utils/hint-util';
import { TextField } from 'tns-core-modules/ui/text-field';

@Component({
    selector: "gr-main",
    providers: [UserService],
    templateUrl: 'app/pages/login/login.component.html',
    styleUrls: ['app/pages/login/login-common.css', 'app/pages/login/login.css']
})
export class LoginComponent implements OnInit {
    public user: User;
    public isLoggingIn = true;
    @ViewChild('container') container: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;

    constructor(
        private router: Router,
        private userService: UserService,
        private page: Page
    ) {
        this.user = new User();
        this.user.email = 'nativescripting2@gmail.com';
        this.user.password = 'password';
    }

    public ngOnInit() {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = 'res://bg_login';
    }

    public submit() {
        if (!this.user.isValidEmail()) {
            alert('Enter a valid email address.');
            return;
        }

        if (this.isLoggingIn) {
            this.login()
        } else {
            this.signUp();
        }
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        const container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color('white') : new Color('#301217'),
            duration: 200
        });
    }

    private login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(['/list']),
                (error) => alert('Unfortunately we could not find your account.')
            );
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

    private setTextFieldColors() {
        const emailTextField = <TextField>this.email.nativeElement;
        const passwordTextField = <TextField>this.password.nativeElement;

        const mainTextColor = new Color(this.isLoggingIn ? 'black' : '#C4AFB4');
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;

        const hintColor = new Color(this.isLoggingIn ? '#ACA6A7' : '#C4AFB4');
        setHintColor({ view: emailTextField, color: hintColor });
        setHintColor({ view: passwordTextField, color: hintColor });
    }
}
