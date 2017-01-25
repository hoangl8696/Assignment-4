import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-contrast',
  templateUrl: './auto-contrast.component.html',
  styleUrls: ['./auto-contrast.component.css']
})
export class AutoContrastComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  private isAutoContrast: boolean = false;
  private redArray: any = [];
  private greenArray: any = [];
  private blueArray: any = [];

  private autoContrast = () => {
    if (this.isAutoContrast) {
      for (var i = 0; i < this.imageService.numPixels; i++) {
        this.redArray.push(this.imageService.pixels[i * 4]);
        this.greenArray.push(this.imageService.pixels[i * 4 + 1]);
        this.blueArray.push(this.imageService.pixels[i * 4 + 2]);
      }

      const maxRed = Math.max.apply(null, this.redArray);
      const maxGreen = Math.max.apply(null, this.greenArray);
      const maxBlue = Math.max.apply(null, this.blueArray);

      const minRed = Math.min.apply(null, this.redArray);
      const minGreen = Math.min.apply(null, this.greenArray);
      const minBlue = Math.min.apply(null, this.blueArray);
      

      for (var i = 0; i < this.imageService.numPixels; i++) {
        this.imageService.pixels[i * 4] = (this.imageService.pixels[i * 4] - minRed) / (maxRed - minRed) * 255; // Red
        this.imageService.pixels[i * 4 + 1] = (this.imageService.pixels[i * 4 + 1] - minGreen) / (maxGreen - minGreen) * 255; // Green
        this.imageService.pixels[i * 4 + 2] = (this.imageService.pixels[i * 4 + 2] - minBlue) / (maxBlue - minBlue) * 255; // Blue
      }

      this.imageService.context.clearRect(0, 0, this.imageService.canvas.width, this.imageService.canvas.height);
      this.imageService.context.putImageData(this.imageService.imageData, 0, 0);
    }
  };

  ngOnInit() {
    this.imageService.functions.autoContrast = this.autoContrast;
  }

}
