import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KomentaraiService } from './komentarai.service';
import { KomentaraiComponent } from './komentarai/komentarai.component';
import { TestDropdownComponent } from './test-dropdown/test-dropdown.component';
import { DropdownDirective } from './dropdown.directive';
import { ProgBarDirective } from './prog-bar.directive';
import { RegistracijaComponent } from './registracija/registracija.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsedEmailDirective } from './used-email.directive';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { StudentuRegistracijaComponent } from './studentu-registracija/studentu-registracija.component';

@NgModule({
  declarations: [
    AppComponent,
    KomentaraiComponent,
    TestDropdownComponent,
    DropdownDirective,
    ProgBarDirective,
    RegistracijaComponent,
    UsedEmailDirective,
    RezervacijaComponent,
    StudentuRegistracijaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [KomentaraiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
