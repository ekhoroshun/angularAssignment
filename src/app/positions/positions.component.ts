import { Component, OnInit, OnDestroy } from '@angular/core';
import { Position } from '../data/position';
import { PositionServiceService } from '../data/position-service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  positions: Position[];
  getPositionsSub: any;
  loadingError = false;
  
  constructor(
    private positionService : PositionServiceService,
    private route: ActivatedRoute
  ) 
  {
    
   }

  ngOnInit() {
    this.getPositionsSub = this.positionService.getPositions().subscribe( data => {
      this.positions = data;
    }, () => {
      this.loadingError = true;
    });
  }

 ngOnDestroy(){
  if ( this.getPositionsSub != null) {this.getPositionsSub.unsubscribe()};

 }

}
