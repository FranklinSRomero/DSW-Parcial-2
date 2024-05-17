import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pinguino } from './pinguino';

@Injectable({
  providedIn: 'root'
})
export class PinguinoService {
  private apiUrl: string = 'https://gist.githubusercontent.com/fai-aher/0ea9284facf59d238269c4004dbcf277/raw/ba6109c62917339a9f1617d0a405506ed24c1ea7/penguin-species.json';

  constructor(private http: HttpClient) {}

  getPinguinos(): Observable<Pinguino[]> {
    return this.http.get<Pinguino[]>(this.apiUrl);
  }

}
