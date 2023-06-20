import { Component } from '@angular/core';
import { DetalhesViagemComponent } from '../detalhes-viagem/detalhes-viagem.component';

@Component({
  selector: 'app-listagem-viagem',
  templateUrl: './listagem-viagem.component.html',
  styleUrls: ['./listagem-viagem.component.css']
})
export class ListagemViagemComponent {

  viagens = [
    {"destino":"Acapulco", "tipo": "LAZER", "dataDeChegada":"08/06/2021", "dataDeSaida":"18/06/2021", "orcamento":"4.000,00", "qtd":"4"},
    {"destino":"Egito(Cairo)", "tipo": "LAZER", "dataDeChegada":"20/06/2021", "dataDeSaida":"28/06/2021", "orcamento":"5.000,00", "qtd":"3"},
    {"destino":"Nova Zelandia", "tipo": "LAZER", "dataDeChegada":"04/09/2021", "dataDeSaida":"11/10/2021", "orcamento":"7.000,00", "qtd":"4"},
    {"destino":"Australia", "tipo": "LAZER", "dataDeChegada":"04/09/2021", "dataDeSaida":"11/06/2021", "orcamento":"8.000,00", "qtd":"2"}
  ];
}
