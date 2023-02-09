import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseParentComponent } from './course-parent/course-parent.component';
import { CourseDetailChildComponent } from './course-detail-child/course-detail-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseParentComponent,
    CourseDetailChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
