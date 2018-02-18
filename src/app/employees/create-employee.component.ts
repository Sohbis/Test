import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Model/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import { Employee } from '../Model/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  dateOfBirth: Date = new Date(2018, 0, 30);
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: true,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2018, 11, 31),
        dateInputFormat: 'DD/MM/YYYY',

      });
   }

  ngOnInit() {
  }
  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
}
