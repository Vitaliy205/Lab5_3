import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="lab5";
  arr = ["Николай", "Андрей", "Владислав", "Борис", "Богдан"];
}
