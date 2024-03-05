import { Component, Input } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-yt-video-card',
  templateUrl: './yt-video-card.component.html',
  styleUrls: ['./yt-video-card.component.scss']
})
export class YtVideoCardComponent {
  constructor(private http: HttpClient){}
  length = 15
  postedTime = ['months', "weeks", "days", "hours"]
  videoList: any[] = []

  ngOnInit(){
    // let list: any = null;
    // this.http.get('https://picsum.photos/v2/list').subscribe(data => {list = data});
    
    this.videoList = Array.from({ length: this.length }, (_, idx: number) => ({
      "thumbnailUrl": `https://picsum.photos/400/250?random=${idx}`,
      "profileUrl": `https://picsum.photos/30/30?random=${idx}`,
      "timeStamp": `${this.getRandom(10, 59)}:${this.getRandom(10, 59)}`,
      "videoTitle": "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
      "channelName": 'Michael Townley',
      "viewsCount": `${this.getRandom(10, 10 ** 3)}K views`,
      "videoPosted": `${this.getRandom(2, 15)} ${this.postedTime[Math.floor(Math.random() * 4)]} ago`
    }));
  }
  getRandom(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
