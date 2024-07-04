import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'CustomAuthApp';
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    try {
      const dataObservable = await this.apiService.getData();
      dataObservable.subscribe(
        response => {
          this.data = response;
          console.log(this.data);
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    } catch (error) {
      console.error('Error getting auth token', error);
    }
  }
}
