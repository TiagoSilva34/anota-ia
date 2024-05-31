import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SearchIcon from '@mui/icons-material/Search';
import { CardListService, ICardListProps } from './services/card-list.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  translateWords(arg0: string): any {
    throw new Error('Method not implemented.');
  }
  title = 'anota-ia';
  allCardList: ICardListProps[] = [];
  cardList: ICardListProps[] = [];

  constructor(private cardService: CardListService) {}

  ngOnInit(): void {
    this.loadCardList();
  }

  loadCardList() {
    this.cardService.getListOfCards().subscribe((response) => {
      this.cardList = response;
      this.allCardList = response.map((card) => {
        if (card.description.length > 233) {
          card.description = card.description.slice(0, 233) + '...';
        }

        return card;
      });
    });
  }

  searchCard(event: any) {
    let auxCardList = this.cardList;

    let searchVal = event.target.value.toLowerCase()

    auxCardList = this.cardList.filter((card) =>
      card.title.toLowerCase().includes(searchVal) 
    );

    this.allCardList = auxCardList;
  }

  removeCard(id: number) {
    this.allCardList = this.allCardList.filter(card => card.id !== id)
  }

  addStyleInSearchButton() {
    let btnSearch = document.getElementById("btn-search") as HTMLElement

    btnSearch.classList.add('outline-style')
  }

  removeStyleInSearchButton() {
    let btnSearch = document.getElementById("btn-search") as HTMLElement

    btnSearch.classList.remove('outline-style')
  }
}
