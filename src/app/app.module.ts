import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './board/task/task.component';
import { ListComponent } from './board/list/list.component';
import { CreateModalComponent } from './board/list/create-modal/create-modal.component';


const appRoutes: Routes = [
  { path: '', component: BoardComponent },
  { path: 'dashboard', component: BoardComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BoardComponent,
    TaskComponent,
    ListComponent,
    CreateModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot(),
    DragAndDropModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
