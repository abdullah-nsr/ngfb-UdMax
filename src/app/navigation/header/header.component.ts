import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavListToggel = new EventEmitter<void>() 

  constructor() { }

  ngOnInit(): void {
  }
  
  ToTogglenavList(){
    this.sidenavListToggel.emit();
  }

}
