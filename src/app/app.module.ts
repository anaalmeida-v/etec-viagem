import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListagemViagemComponent } from './listagem-viagem/listagem-viagem.component';
import { NovaViagemComponent } from './nova-viagem/nova-viagem.component';
import { ExclusaoViagemComponent } from './exclusao-viagem/exclusao-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemViagemComponent,
    NovaViagemComponent,
    ExclusaoViagemComponent,
    DetalhesViagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
