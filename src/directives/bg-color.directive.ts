import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBgColor]',
  standalone: true
})
export class BgColorDirective implements OnInit{

 @Input('appBgColor') bgColor !:any;
 colors:string[]=[
  '#FF8B64',
  '#55C2E6',
  '#FF5E7D',
  '#55C2E6',
  '#FF8B64',
  '#4BCF82',
  '#7335D2',
  '#F1C75B',
  '#4BCF82',
  '#7335D2'
]
  constructor(private ele : ElementRef) { }

ngOnInit(): void {
  //  console.log(this.bgColor);
   
    this.ele.nativeElement.style.backgroundColor = this.colors[this.bgColor];
    
}
}
