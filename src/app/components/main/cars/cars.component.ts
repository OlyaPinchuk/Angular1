import { Component, OnInit } from '@angular/core';
import {ICar} from '../../../interfaces';
import {CarsService} from '../../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[]

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe(value => this.cars = value);
  }

}
