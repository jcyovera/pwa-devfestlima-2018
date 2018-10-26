import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'pwademo';
  items: Array<any>;
  searchText: string;
  totalResults: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.apiService.fetch(this.searchText).subscribe((data: any) => {
      this.items = data.Search;
      this.totalResults = data.totalResults;
    }, (err) => {
      console.log(err);
    });
  }
  onSearch(event) {
    if (event.which === 13 || this.searchText === '') {
      this.searchText = (this.searchText === '') ? undefined : this.searchText;
      this.getData();
    }
  }

}
