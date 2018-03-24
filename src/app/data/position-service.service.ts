import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { HttpClient } from "@angular/common/http";
import { Position } from "./position";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PositionServiceService {

  private url = "https://hidden-dawn-99445.herokuapp.com";

  constructor(private http:HttpClient) { }

  getPositions() : Observable<Position[]> {
    return this.http.get<Position[]>(`${this.url}/positions`);
  }
}
