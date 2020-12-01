import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../../image.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteImageModalComponent} from './delete-image-modal/delete-image-modal.component';
import {EditImageModalComponent} from './edit-image-modal/edit-image-modal.component';
import { Observable } from 'rxjs';
import { Image } from 'src/app/shared/models/Image';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  imageId: number;
  imageDetails: Image;

  constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router, private ngbModal: NgbModal) {
  }

  DeleteModal() {
    const modalRef = this.ngbModal.open(DeleteImageModalComponent);
    modalRef.componentInstance.id = this.imageId;
  }

  EditModal() {
    const modalRef = this.ngbModal.open(EditImageModalComponent);
    modalRef.componentInstance.image = this.imageDetails;
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.imageId = params['id']);
    this.imageService.getImageDetails(this.imageId).subscribe(response => {
      this.imageDetails = response;
    });
  }

}
