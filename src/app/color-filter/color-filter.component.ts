import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.css']
})
export class ColorFilterComponent implements OnInit {

  private redValue: any = 0;
  private greenValue: any = 0;
  private blueValue: any = 0;
  private strength: any = 0;

  constructor(private imageService: ImageService) { }

  private colorFilter = () => {
    for (var i = 0; i < this.imageService.numPixels; i++) {
      this.imageService.pixels[i * 4] = (this.imageService.pixels[i * 4] + this.redValue) / (101 - this.strength); // Red
      this.imageService.pixels[i * 4 + 1] = (this.imageService.pixels[i * 4] + this.greenValue) / (101 - this.strength); // Green
      this.imageService.pixels[i * 4 + 2] = (this.imageService.pixels[i * 4] + this.blueValue) / (101 - this.strength); // Blue
    }

    this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
    this.imageService.context.putImageData(this.imageService.imageData, 0, 0);

  };

  ngOnInit() {
    this.imageService.functions.colorFilter = this.colorFilter;
  }

}
