import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ICardListProps {
  id: number 
  title: string 
  description: string 
  img: string 
  type: string 
}

const api_url = "https://githubanotaai.github.io/frontend-interview-mock-data/cardlist.json" 

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private httpClient: HttpClient) { }

  getListOfCards(): Observable<ICardListProps[]> {
    return this.httpClient.get<ICardListProps[]>(api_url)
  }
}
