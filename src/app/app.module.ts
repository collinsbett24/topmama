import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { AppRoutingModule } from "./app-routing.module";
import { CountdownModule } from 'ngx-countdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CountdownModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
