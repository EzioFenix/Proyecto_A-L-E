import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { ConfigComponent } from './config/config.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LanguageService } from '../database/language.service';

@NgModule({
  declarations: [
    ConfigComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule, 
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  providers: [
    LanguageService,
  ],
})
export class HomePageModule {}
