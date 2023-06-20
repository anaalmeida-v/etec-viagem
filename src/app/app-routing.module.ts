import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { NovaViagemComponent } from './nova-viagem/nova-viagem.component';

const routes: Routes = [
  {path:'', component:ListagemViagemComponent},
  {path:'detalhes', component:DetalhesViagemComponent},
  {path:'exclusao', component:ExclusaoViagemComponent},
  {path:'novaviagem', component:NovaViagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
