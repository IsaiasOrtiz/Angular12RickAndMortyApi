import { Component, OnInit, HostBinding} from '@angular/core';
import {RickService } from '../../services/rick.service'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @HostBinding("class") classes ="row";
  pages:number = 0;
  mortyData: any;
  constructor(private service: RickService) { }

  ngOnInit(): void {
    this.getData(1);
  }
  getData(page: number){
    this.service.getData(page).subscribe(res => {console.log(res);
     this.mortyData = res;
    }, err=> { console.log(err)});
  }

  cambiarPagina(evento: number){
    console.log(evento);
    this.getData(evento);
  }
}
