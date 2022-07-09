import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KanbanPost } from '../interface/KanbanPost';
import { KanbanPut } from '../interface/KanbanPut';
import { Kanban } from "../interface/Kanban";

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  get(): Observable<any> {
    return this.httpClient.get('/cards/').pipe(
      map(
        (card: Kanban) => card
      )
    );
  }

  post(cardInformation: KanbanPost) {
    return this.httpClient.post(`/cards/`, cardInformation);
  }

  put(id: string, cardInformation: KanbanPut) {
    return this.httpClient.put(`/cards/${id}`, {...cardInformation, id});
  }

  delete(id: string) {
    return this.httpClient.delete(`/cards/${id}`);
  }
}
