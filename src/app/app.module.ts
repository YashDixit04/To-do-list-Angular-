import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
// import { TasksComponent } from "./task/tasks/task.component";
import { TaskComponent } from "./task/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TasksComponent } from "./task/tasks/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent, CardComponent, TaskComponent, TasksComponent, NewTaskComponent], // too remove a standalone components ( without standalone components).
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule] // import a standalone components(with standalone components). and import a BrowserModule
})

export class AppModule { }