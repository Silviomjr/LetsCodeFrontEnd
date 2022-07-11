import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Kanban } from '../../interface/Kanban';
import { KanbanService } from '../../services/kanban.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() newCard: boolean = false;
  @Input() title: string = '';
  @Input("data")
  set loadData(value: Kanban[]) {
    if(value && value.length > 0) {
      this.data = value;
      this.setFormValue();
    } 
  }

  data: Kanban[] = [];
  @Output() refreshBoard: EventEmitter<boolean> = new EventEmitter();
  public currentIndex: number = 0;
  public editting: boolean = false;
  form = new FormGroup({
    titulo: new FormControl(''), 
    conteudo: new FormControl(''), 
    lista: new FormControl('')

  })

  constructor(private kanbanService:KanbanService) { }

  ngOnInit(): void {
  }

  remove(id: any) {
    this.kanbanService.delete(id).subscribe(response =>{
      if(response) {
        this.refreshBoard.emit(true);
      }
    });
  }
  
  addNewTask() {
    const informations = this.form.getRawValue();
    this.kanbanService.post(informations).subscribe(response =>{
      if(response) {
        this.refreshBoard.emit(true);
      }
    });
  }

  next() {
    this.currentIndex < this.data.length - 1 ?
      this.currentIndex++ : this.currentIndex = 0;
  }

  back() {
    this.currentIndex === 0 ?
    this.currentIndex = this.data.length-1 : this.currentIndex--;
  }

  edit() {
    this.editting = true;
  }

  editTask(id: any) {
    const informations = this.form.getRawValue();
    this.kanbanService.put(id, informations).subscribe(response =>{
      if(response) {
        this.refreshBoard.emit(true);
      }
    });
  }

  setFormValue() {
    this.form.setValue(
      {
        titulo: this.data[this.currentIndex].titulo, 
        conteudo: this.data[this.currentIndex].conteudo, 
        lista: this.data[this.currentIndex].lista
      }
    )
  }
}
