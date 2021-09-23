import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  ImgUrls1:string[]=[];
  ImgUrls2:string[]=[];

  ImgUrls1completed= false;
  ImgUrls2completed= false;

  constructor(private service:AppService) { }

  slideshow1Over(){
    this.ImgUrls1completed = true;
  }
  slideshow2Over(){
    this.ImgUrls2completed = true;
  }

  slideshow1start(){
    this.ImgUrls1completed = false;
  }
  slideshow2start(){
    this.ImgUrls2completed = false;
  }

  ngOnInit(): void {

    this.ImgUrls1 = this.service.getImgUrls1();
    this.ImgUrls2 = this.service.getImgUrls2();
  }

}
