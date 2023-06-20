import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exclusao-viagem',
  templateUrl: './exclusao-viagem.component.html',
  styleUrls: ['./exclusao-viagem.component.css']
})
export class ExclusaoViagemComponent {

  constructor() { }
  
  @Input() num:number=0;


}
