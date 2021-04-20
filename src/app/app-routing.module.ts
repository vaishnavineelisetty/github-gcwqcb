import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { BollywoodComponent } from "./bollywood/bollywood.component";
import { HollywoodComponent } from "./hollywood/hollywood.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { TollywoodComponent } from "./tollywood/tollywood.component";
import { HomeComponent } from "./home";
import { AuthGuard } from "./helpers";

const usersModule = () =>
  import("./users/users.module").then(x => x.UsersModule);

const routes: Routes = [
  { path: "SignUp", component: SignupComponent },
  { path: "Movies", component: TollywoodComponent },
  { path: "Bollywood", component: BollywoodComponent },
  { path: "Hollywood", component: HollywoodComponent },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "users", loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: "*", component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [
  TollywoodComponent,
  HollywoodComponent,
  BollywoodComponent,
  SignupComponent,
  LoginComponent,
  HomeComponent,

  AppComponent
];
