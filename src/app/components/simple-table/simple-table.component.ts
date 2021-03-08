import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit {

  @Input() tableData: any[] = [
    {first: 'Natasha', last: 'Romanoff', dob: '11/22/1984'},
    {first: 'Tony', last: 'Stark', dob: '05/29/1976'},
    {first: 'Steve', last: 'Rogers', dob: '07/04/1918'},
    {first: 'Bruce', last: 'Banner', dob: '12/18/1969'},
    {first: 'Bucky', last: 'Barnes', dob: '03/10/1917'},
    {first: 'Rhodey', last: 'Rhodes', dob: '09/06/1968'},
    {first: 'Wanda', last: 'Maximoff', dob: '01/01/1989'},
    {first: 'Vision', last: 'unknown', dob: '05/05/2015'}
  ]


  ngOnInit(): void {
  }

}

