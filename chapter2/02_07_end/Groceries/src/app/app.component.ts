import { Component } from "@angular/core";

@Component({
    selector: "gr-main",
    template: `
        <StackLayout>
            <TextField hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
            <TextField hint="Password" secure="true"></TextField>

            <Button text="Sign in" class="submit-button"></Button>
            <Button text="Sign up for Groceries"></Button>
        </StackLayout>
    `,
    styleUrls: ['app/pages/login/login-common.css', 'app/pages/login/login.css']
})
export class AppComponent { }
