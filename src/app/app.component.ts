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
  key: boolean = true;
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
  onPreview() {
    this.key = false;
    console.log(this.Datalist);
  }
  Close() {
    this.key = true;
  }
  print() {
    var divToPrint = document.getElementById('print-index-invoice');
    var newWin = window.open('', 'Print-Window');
    newWin.document.open();
    newWin.document.write(
      '<html><link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" media="print"/><body onload="window.print()">' +
        divToPrint.innerHTML +
        '</body></html>'
    );
    newWin.document.close();
    setTimeout(function () {
      newWin.close();
    }, 5);
  }
}
