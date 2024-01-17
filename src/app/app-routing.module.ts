import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllMetaTagsComponent } from './all-meta-tags/all-meta-tags.component';
import { MetaOneComponent } from './meta-one/meta-one.component';
import { DetailsComponent } from './details/details.component';
import { PreviewComponent } from './preview/preview.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"generate-meta",
    component:MetaOneComponent
  },
  {
    path:"meta-tags",
    component:AllMetaTagsComponent
  },
  {
    path:"details",
    component:DetailsComponent
  },
  {
    path:"preview",
    component:PreviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
