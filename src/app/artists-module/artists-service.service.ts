import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistsServiceService {
  private accessToken: string = 'BQBRmgVAY-G-rZNC3hpFl4n0E7ksN8KQUoISB1OXJUI_6zZeEgBrrS1Y4MHTIAePh-Ku1pPfeYvDajmbMhEa5uTlYUMFcZ-eUT1A4riJnJzIslTGOx_L';
  constructor(private http: HttpClient) { }

  getArtist(artistName: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get(`search?q=${artistName}&type=artist`, { headers });
  }
}
