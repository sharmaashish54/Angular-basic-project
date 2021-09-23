import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MybuttonComponent } from './mybutton/mybutton.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    MybuttonComponent,
    SlideshowComponent,
    SelectedUserComponent,
    UserListComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
