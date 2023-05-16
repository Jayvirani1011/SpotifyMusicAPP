import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from './home-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  songList: any[] = []

  constructor(private homeService: HomeServicesService){}

  ngOnInit(): void{
    this.homeService.getAllSong().subscribe((response: any) => {
      if (response != undefined) {
        console.log(response);
        this.songList = response.albums.items;
        console.log(this.songList);
      }
    })
  }
}
