import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, IonInput } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements AfterViewInit {
  @ViewChild('myInput') myInput: IonInput;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 100);
  }

  forward() {
    this.router.navigate(['home']);
  }
}
