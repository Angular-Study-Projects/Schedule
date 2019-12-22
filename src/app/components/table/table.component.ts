import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listOfData = [
    {
      key: '1',
      time: 'M1',
    },
    {
      key: '2',
      time: 'M2',
    },
    {
      key: '3',
      time: 'M3',
    },
    {
      key: '4',
      time: 'M4',
    },
    {
      key: '5',
      time: 'M5',
    },
    {
      key: '6',
      time: 'M6',
    },
    {
      key: '7',
      time: 'T1',
    },
    {
      key: '8',
      time: 'T2',
    },
    {
      key: '9',
      time: 'T3',
    },
    {
      key: '10',
      time: 'T4',
    },
    {
      key: '11',
      time: 'T5',
    },
    {
      key: '12',
      time: 'T6',
    },
    {
      key: '13',
      time: 'N1',
    },
    {
      key: '14',
      time: 'N2',
    },
    {
      key: '15',
      time: 'N3',
    },
    {
      key: '16',
      time: 'N4',
    }
  ];

}
