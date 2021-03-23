import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

import { AlunosComponent } from './alunos/alunos.component';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';



const rotas:Routes = [
  {path:'',component:HomeComponent},
  {path:"alunos",component:AlunosComponent},
  {path:"professores",component:ProfessoresComponent},
  {path:"cursos",component:CursosComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,AlunosComponent,ProfessoresComponent,CursosComponent
  ],
  imports: [
ReactiveFormsModule,
BrowserModule,
    RouterModule.forRoot(rotas),
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,MatTabsModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
