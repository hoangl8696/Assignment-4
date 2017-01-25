import {Injectable} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class ImageService {

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  image: HTMLImageElement = new Image();
  imageData: any;
  pixels: any;
  numPixels: number;
  functions: any = {};


  constructor() {
  }

  setCanvas = (c) => {
    this.canvas = c;
    this.context = this.canvas.getContext('2d');
  };

  filetoCanvas = (fileElement) => {
    if (fileElement.target.files && fileElement.target.files[0]) {
      const reader: FileReader = new FileReader();

      reader.addEventListener('load', (evt: any) => {
        console.log(evt.target);
        this.image.src = evt.target.result;
        this.image.addEventListener('load', this.resetImage);
      });

      reader.readAsDataURL(fileElement.target.files[0]);
    }
  };

  resetImage = () => {
    this.canvas.height = this.image.height;
    this.canvas.width = this.image.width;

    this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height);
    this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    this.pixels = this.imageData.data;
    this.numPixels = this.imageData.width * this.imageData.height;
  };

  applyFilters = () => {
    this.resetImage();

    for (let i in this.functions) {
      if (this.functions.hasOwnProperty(i)) {
        this.functions[i]();
      }
    }

  }
}
