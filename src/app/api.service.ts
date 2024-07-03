import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Amplify } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://r0oxhh5bu0.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http: HttpClient) { }

  async getData(): Promise<Observable<any>> {
   // const session = await Amplify.getConfig();
    const token = Amplify.getConfig().Auth?.Cognito.userPoolClientId;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
