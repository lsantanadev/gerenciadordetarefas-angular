import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConclui3daDirective implements OnInit {

  @Input() tarefaConcluida: boolean

  constructor( private el: ElementRef) { }

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      this.el.nativeElement.style.textDecoration  = "line-through"
    }
  }

}
