
import { TestBed } from '@angular/core/testing';
import { CardListService } from './card-list.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';

describe('CardList Service test', () => {
  let cardListService: CardListService
  let httpMock: HttpTestingController
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardListService]
    })

    cardListService = TestBed.inject(CardListService)
    httpMock = TestBed.get(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  })

  it("should be create CardList and check request and response cardList service ", async () => {
    expect(cardListService).toBeTruthy()

    cardListService.getListOfCards().subscribe(response => {
      expect(response).toBeTruthy()
    })
  })
});
