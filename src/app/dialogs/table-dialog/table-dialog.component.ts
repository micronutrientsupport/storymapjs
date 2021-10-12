import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-table-dialog',
  templateUrl: './table-dialog.component.html',
  styleUrls: ['./table-dialog.component.scss']
})

export class TableDialogComponent implements OnInit {

  public dataSourceArray:any = [
    'Household Consumption & Expenditure Surveys',
    'Food Balance Sheet data',
  ];
  public selectedItem: any;


  constructor() { }

  ngOnInit(): void {

  }




}


