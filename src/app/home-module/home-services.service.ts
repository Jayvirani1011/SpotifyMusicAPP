import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {
  [x: string]: any;
  private clientId: string = '442a1df554d34f438d5f6ca99fb59389';
  private clientSecret: string = '9b7a7347a03b43568a8723cfc7680273';
  private accessToken: string = 'BQBRmgVAY-G-rZNC3hpFl4n0E7ksN8KQUoISB1OXJUI_6zZeEgBrrS1Y4MHTIAePh-Ku1pPfeYvDajmbMhEa5uTlYUMFcZ-eUT1A4riJnJzIslTGOx_L';
  private playlist_id: string = '3cEYpjA9oz9GiPac4AsH4n ';
  constructor(private http: HttpClient) { }

  private getAccessToken(): void{
    const auth = btoa(`${this.clientId}: ${this.clientSecret}`);
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Basic ${auth}`});
    const body = 'grant_type=client_credentials';
    const response: any = this.http.post(`https://accounts.spotify.com/api/${this.accessToken}`, body, { headers }).subscribe();
    this.accessToken = response.access_token;
  }

  getAllSong(){
    if(!this.accessToken){
      this.getAccessToken();
    }
    const headers = new HttpHeaders({Authorization: `Bearer ${this.accessToken}`});
    return this.http.get(`browse/new-releases`,{headers,})
  }
}
