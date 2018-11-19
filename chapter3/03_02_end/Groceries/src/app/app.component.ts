import { Component } from "@angular/core";

@Component({
    selector: "gr-main",
    template: `
        <StackLayout>
            <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
            <TextField [(ngModel)]="email" hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
            <TextField hint="Password" secure="true"></TextField>

            <Button [text]="isLoggingIn ? 'Sign in' : 'Sign Up'" class="submit-button" (tap)="submit()"></Button>
            <Button [text]="isLoggingIn ? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
        </StackLayout>
    `,
    styleUrls: ['app/pages/login/login-common.css', 'app/pages/login/login.css']
})
export class AppComponent {
    public email = 'alex@nuvious.com';
    public isLoggingIn = true;

    public submit() {
        alert('You\'re using: ' + this.email);
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
}
