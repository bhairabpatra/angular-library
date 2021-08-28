import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-demo-lib',
  template: `

      <lib-counter-demo></lib-counter-demo>

  `,
  styles: [
  ]
})
export class MyDemoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
