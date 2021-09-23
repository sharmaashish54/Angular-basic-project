import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  private ImgUrls1:string[]=[
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
    'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg?quality=90&auto=webp',
    'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*'
  ]

  private ImgUrls2:string[]=[
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/200/300/',
    'https://picsum.photos/200/300',
    'https://picsum.photos/200'
  ]

  getImgUrls1(){
    return this.ImgUrls1
  }

  getImgUrls2(){
    return this.ImgUrls2
  }
}
