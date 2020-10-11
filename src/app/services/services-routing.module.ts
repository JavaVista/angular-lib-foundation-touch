import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDocumentationComponent } from './service-documentation/service-documentation.component';

const services_routes: Routes = [
    { path: '', component: ServiceDocumentationComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(services_routes)
    ],
    exports: [RouterModule]
  })
  export class ServicesRoutingModule { }