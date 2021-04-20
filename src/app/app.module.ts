import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// used to create fake backend
import { fakeBackendProvider } from "./helpers";

import { JwtInterceptor, ErrorInterceptor } from "./helpers";

import { AlertComponent } from "./components";

import { AppRoutingModule, routingComponent } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SevicingService } from "./sevicing.service";
import { SignupComponent } from "./signup/signup.component";
import { TollywoodComponent } from "./tollywood/tollywood.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    SignupComponent,
    AlertComponent,
    TollywoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SevicingService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
