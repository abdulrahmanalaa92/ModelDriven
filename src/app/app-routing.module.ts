import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AppComponent } from "app/app.component";
import { SignupComponent } from "app/signup/signup.component";
import { LoginComponent } from "app/login/login.component";

const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

