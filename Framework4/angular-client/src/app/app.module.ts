import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from "./home.component";
import { AppRoutingModule } from "./app-routing.module";
import { TodoService } from "./todo/todo.service";
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo/todo-routing/todo-routing.module';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TodoRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
