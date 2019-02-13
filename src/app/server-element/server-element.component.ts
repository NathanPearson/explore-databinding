import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

// demo the lifecycle events of angular
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;


  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('onchange called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('docheck called');
  }

  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('afterContentInit');
    console.log('Paragraph Content: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('aftercontentchecked');
  }

  ngAfterViewInit(): void {
    console.log('afterviewinit');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('afterviewchecked');
  }

  ngOnDestroy(): void {
    console.log('!!!!!!!!!!!!!!!!!DESTROY!!!!!!!!!!!!!!!!!');
  }
}
