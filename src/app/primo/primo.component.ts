import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.scss']
})
export class PrimoComponent implements OnInit {
  title = 'Hola';
  ciao = 'ciao';
  comp = 'comp1'
  constructor() { }

  ngOnInit(): void {
  }

}
