import { Component, OnInit } from '@angular/core';
import { Owner, OwnerService } from '../../OwnersService';
import { catchError, Observable } from 'rxjs';

@Component({
  selector: 'app-task2',
  standalone: false,
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.css'
})
export class Task2Component implements OnInit{
  info: Array<Owner> = [];

  constructor(private owner: OwnerService){

  }
  ngOnInit(): void {
    this.owner.getInfo().subscribe((info) => {this.info = info});
}
}
