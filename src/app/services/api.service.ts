import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private googleDataUrl = 'https://www.omdbapi.com/?apikey=b91e40f6&s=';
  private localUrl = 'http://localhost:3000/api';
  constructor(private httpClient: HttpClient) { }

  fetch(searchText = 'Lego'):  Observable<Item[]> {
    const url = `${this.googleDataUrl + searchText}&page=1&plot=full`;
    return <Observable<Item[]>>this.httpClient.get(url);
  }
}
