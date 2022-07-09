import { Component, OnInit } from '@angular/core';
import { Kanban } from 'src/app/core/interface/Kanban';
import { KanbanService } from 'src/app/core/services/kanban.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.sass']
})
export class KanbanBoardComponent implements OnInit {
  public toDoCards: Kanban[] = [];
  public doingCards: Kanban[] = [];
  public doneCards: Kanban[] = [];
  public kanbanStatus = {
    1: 'ToDo',
    2: 'Doing',
    3: 'Done'
  }
  constructor(
    private kanbanService:KanbanService,
  ) {}

  ngOnInit(): void {
    this.getCard();
  }

  filterCards(cards: Kanban[]) {
    this.toDoCards = cards.filter((card: Kanban) => card.lista === this.kanbanStatus[1]);
    this.doingCards = cards.filter((card: Kanban) => card.lista === this.kanbanStatus[2]);
    this.doneCards = cards.filter((card: Kanban) => card.lista === this.kanbanStatus[3]);
  }

  refreshBoard(event: boolean) {
    console.log('event de refresh', event)
    if(event) {
      this.getCard();
    }
  }

  getCard() {
    let cards = [];
    this.kanbanService.get().subscribe((cardsApi: Kanban[] | undefined) => {
      if(cardsApi) {
        console.log('cards', cardsApi);
        cards = cardsApi;
        this.filterCards(cards);
      }
    });
  }

}
