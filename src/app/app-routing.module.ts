import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MazarsRegistrationComponent } from './mazars-registration/mazars-registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'mazarsRegistration', component: MazarsRegistrationComponent },
  { path: 'sidebar', component: SidebarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
