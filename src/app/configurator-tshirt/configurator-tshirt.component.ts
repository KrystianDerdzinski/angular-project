import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Form } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-configurator-tshirt',
  templateUrl: './configurator-tshirt.component.html',
  styleUrls: ['./configurator-tshirt.component.scss']
})
export class ConfiguratorTshirtComponent implements OnInit {
  canvas: any;
  selectedColor = 'white';
  selectedSize = 'l';
  price: number;
  shouldAddZero = false;
  constructor() { }

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('tshirtCanvas');
    fabric.Image.fromURL('../assets/img/tshirt.png', img => { this.canvas.add(img)});
    this.price = this.randomPrice();
    this.checkIfAddZero();
  }
  randomPrice() {
    const random: number = Math.floor(Math.random() * 10000) / 100;
    return random;
  }

  // checks if the second number after decimal point is 0 - allows displaying (for instance) 13.10 instead of 13.1
  checkIfAddZero() {
    const re = /^(\d*)\.\d$/;
    if (re.test(this.price.toString())) {
      this.shouldAddZero = true;
    } else {
      this.shouldAddZero = false;
    }
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    // console.log(file);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = e.target.result;
      console.log(data);
    }
    // ((imageEvent) => {
    //   const imgObj = new Image();
    //   imgObj.src = imageEvent.target.result as string;
    //   const userImage = new fabric.Image(imgObj);
    //   console.log(userImage);
    //   this.canvas.add(userImage);
    //   this.canvas.renderAll();
    //   console.log(this.canvas);
    // })
    // new fabric.Image(file, img => { this.canvas.add(img); });
  }


}
