import {Component, OnInit} from '@angular/core';
import { Image } from 'src/app/shared/models/Image';
import {ImageService} from '../../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images: Image[];

  constructor(private service: ImageService) {
  }


  getAllImages() : void {
    this.service.getImages()
      .subscribe(img => {
        this.images = img.filter(image => {
          return image.id < 80;
        });
      });
  }

  ngOnInit() {
    this.getAllImages();
  }

}

