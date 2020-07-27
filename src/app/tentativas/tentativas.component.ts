import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public heart: string = ''
  public emptyheart: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
