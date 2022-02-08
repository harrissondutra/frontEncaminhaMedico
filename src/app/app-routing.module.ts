import { ProfissionalCreateComponent } from './views/components/profissional/profissional-create/profissional-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { ProfissionalReadComponent } from './views/components/profissional/profissional-read/profissional-read.component';
import { EstabelecimentoReadComponent } from './views/components/estabelecimento/estabelecimento-read/estabelecimento-read.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'profissional',
    component: ProfissionalReadComponent
  },

  {
    path:'estabelecimento',
    component: EstabelecimentoReadComponent
  },

  
  {
    path:'profissional/create',
    component: ProfissionalCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
