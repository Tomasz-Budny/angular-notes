import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  directives: boolean = true;

  // Potrzebne do zarejestrowania ikon svg
  constructor(private iconReg: SvgIconRegistryService) { }

  ngOnInit(): void {
    
    // Tutaj dodajemy poszczególne svg
    // Możemy to robić na dwa sposoby
    // 1. dodać odwołanie do pliku
    //this.iconReg.loadSvg('foo.svg').subscribe(); // tylko taki musi wcześniej istnieć

    // 2. dodać ze stringa
    this.iconReg.addSvg('custom-name',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M1 1 L1 9 L9 9 L9 1 Z"/></svg>'
   );

   this.iconReg.addSvg('doctor',
   `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g clip-path="url(#clip0_38_5)">
   <path d="M16.3334 23.3334L28 35L39.6667 23.3334H16.3334Z" fill="#02237E"/>
   </g>
   <defs>
   <clipPath id="clip0_38_5">
   <rect width="56" height="56" fill="white"/>
   </clipPath>
   </defs>
   </svg>`
  );

  
   // aby zobaczyć użycie tego serwisu idź do komponentu test
  }
}
