import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    console.log('Data component initialized');
    this.apiService.getData().then((val) => {
      val.subscribe(
        response => {
          this.data = response;
          console.log('------------------------------------');
          console.log(this.data);
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
    })
  }
}
