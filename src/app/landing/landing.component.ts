import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Renderer2 } from '@angular/core'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

   downloadFile() {
      const link = document.createElement('a');
      link.setAttribute('target', '_blank');
      link.setAttribute('href', 'https://drive.google.com/u/0/uc?id=1VTiGzphtFJ89tZ1W0QxJIYVv-kO10y8q&export=download');
      link.setAttribute('download', `Jilks_Smith.pdf`);
      link.click();
      link.remove();
   }


  ngOnInit(): void {

  }

}
