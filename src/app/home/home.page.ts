import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonInput } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('myInput') myInput: IonInput;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.myInput.setFocus();
    }, 100);
  }

  forward() {
    this.router.navigate(['home2']);
  }
}
