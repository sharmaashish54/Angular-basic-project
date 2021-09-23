import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
@Input()
  imgUrls: string[]=[]

  activeIndex=0;
  constructor() { 
  }
  @Output()
  slideshowOver = new EventEmitter<string>();

  @Output()
  slideshowStart = new EventEmitter<string>();

  next(){
    if(this.activeIndex<this.imgUrls.length-1){
    this.activeIndex++;
    }

    if(this.activeIndex==this.imgUrls.length-1){
      this.slideshowOver.emit('slideshow over');
    }
  }
  previous(){
    if(this.activeIndex>0){
    this.activeIndex--;
    }
    if(this.activeIndex==0){
      this.slideshowStart.emit('slideshow started');
    }
  }

  ngOnInit(): void {
  }

}
