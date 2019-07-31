import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuranService {

  private baseUrl = 'http://api.alquran.cloud';

  constructor(private http: HttpClient) { }

  getEdition(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/v1/edition`);
  }
}
