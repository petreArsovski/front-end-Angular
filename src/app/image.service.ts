import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Image } from './shared/models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageUrl: string = `http://jsonplaceholder.typicode.com/photos/`;

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imageUrl);
  }
  getImageDetails(id): Observable<Image> {
    return this.http.get<Image>(this.imageUrl + id);
  }
  deleteImage(id): Observable<Image> {
    return this.http.delete<Image>(this.imageUrl + id);
  }
  addImage(image): Observable<Image> {
    return this.http.post<Image>(this.imageUrl, image);
  }
  editImage(image): Observable<Image> {
    return this.http.put<Image>(this.imageUrl + image.id, image);
  }
}
