import {Component, OnInit} from '@angular/core';
import {ImageService} from "../services/image.service";

@Component({
  selector: 'app-bright-contrast',
  templateUrl: './bright-contrast.component.html',
  styleUrls: ['./bright-contrast.component.css']
})
export class BrightContrastComponent implements OnInit {

  private contrast: any = 1;
  private brightness: any = 0;

  constructor(private imageService: ImageService) {
  }


  private brightContrast = () => {
    for (var i = 0; i < this.imageService.numPixels; i++) {
      this.imageService.pixels[i * 4] = (this.imageService.pixels[i * 4] - 128) * this.contrast + 128 + this.brightness; // Red
      this.imageService.pixels[i * 4 + 1] = (this.imageService.pixels[i * 4 + 1] - 128) * this.contrast + 128 + this.brightness; // Green
      this.imageService.pixels[i * 4 + 2] = (this.imageService.pixels[i * 4 + 2] - 128) * this.contrast + 128 + this.brightness; // Blue
    }

    this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
    this.imageService.context.putImageData(this.imageService.imageData, 0, 0);

  };

  ngOnInit() {
    this.imageService.functions.brightContrast = this.brightContrast;
  }

}
