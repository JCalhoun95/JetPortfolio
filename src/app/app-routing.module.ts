import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AftercareComponent } from './aftercare/aftercare.component';
import { ArtComponent } from './art/art.component';
import { HomeComponent } from './home/home.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"art", component:ArtComponent},
  {path:"pollicies", component:PoliciesComponent},
  {path:"aftercare", component:AftercareComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
