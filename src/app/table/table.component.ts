import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { ExportService } from '../export.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource = [];
  displayedColumns: string[] = ['date', 'amount', 'category'];  

  dataForm: FormGroup;

  name;
  email;

  constructor(private fb: FormBuilder, private api: ExportService) { }

  ngOnInit() {
  	// Add your Validators here -- Requirement 4
  	this.dataForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]]
     })

     this.getTableData();
     this.export()
  }

  updateValue() {
  	if (this.dataForm.valid) {
  		this.name = this.dataForm.value.name;
  		this.email = this.dataForm.value.email;
  	}

  }

  export() {
  	console.log("'exportAsExcelFile' fnuction works well, just pass the data that you need to export into 'exportAsExcelFile' function");
    this.name = this.api.exportAsExcelFile(this.name);
    this.email = this.api.exportAsExcelFile(this.email);
  }

  getTableData(){
    this.dataSource = TRANSACTION_DATA.data;    
  }

}


const TRANSACTION_DATA = {
  "data":[
    {      
      "amount":"108",
      "category":"Advertising & Marketing",      
      "date":"2019-08-28",                
    },
    {"amount":"79","category":"Cell & Telephone","date":"2019-08-26"},
    {"amount":"-91.46","category":"Advertising & Marketing","date":"2019-08-24"},
    {"amount":"-108","category":"Advertising & Marketing","date":"2019-08-24"},
    {"amount":"-93","category":"Advertising & Marketing","date":"2019-08-20"},     
  ]  
}

