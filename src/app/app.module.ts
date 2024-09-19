import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
// import { TaskComponent } from "./task/tasks.component";
// import { CardComponent } from "./shared/card/card.component";
// import { TasksComponent } from "./task/task/task.component";
// import { NewTaskComponent } from "./task/new-task/new-task.component";
// import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./task/tasks.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent], // too remove a standalone components ( without standalone components).
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule] // import a standalone components(with standalone components). and import a BrowserModule
})

export class AppModule { }