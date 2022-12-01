import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BillApp';

  FormData: FormGroup;
  Datalist: any;

  ngOnInit() {
    this.Datalist = [];

    this.FormData = new FormGroup({
      item: new FormControl(null),
      qty: new FormControl(null),
      rate: new FormControl(null),
      discount: new FormControl(null),
      mode: new FormControl(null),
    });
  }
  Preview() {
    console.log(this.FormData.value);
  }
  Add() {
    // console.log(this.FormData);
    this.Datalist.push(this.FormData.value);
    this.FormData.reset();
  }
  delete(selecteddata: FormData) {
    this.Datalist.forEach((value, index) => {
      if (value == selecteddata) this.Datalist.splice(index, 1);
      // console.log('Value', value);
      // console.log('Index', index);
      // console.log('selecteddata', selecteddata);
    });
  }

  edit() {
    alert('Edit');
  }
}
