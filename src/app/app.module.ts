import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './add/add.component';
import { ListeComponent } from './liste/liste.component';
import { TodoService } from './todo.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [  // ajouter les composants
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    ListeComponent
  ],
  imports: [                     // ajouter les modules
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [AppService, TodoService], // ajouter les services
  bootstrap: [AppComponent]
})
export class AppModule { }
