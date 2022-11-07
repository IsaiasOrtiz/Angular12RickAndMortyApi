import { Component , Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  @Output() paginaSeleccionada = new EventEmitter();
  @Input() pages:number = 1;
  constructor() { }
  numSequence(n: number): Array<number> {
    return Array(n);
  }

  emitirEvento(pg: number){
    this.paginaSeleccionada.emit(pg);
  }
}
