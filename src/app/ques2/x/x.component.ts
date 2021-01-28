import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter, OnInit} from '@angular/core'
import {YComponent} from '../y/y.component'
@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.scss']
})
export class XComponent implements OnInit {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  xcom: any
   constructor(private resolver: ComponentFactoryResolver) {}
   createComponent(){
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(YComponent);
    this.componentRef = this.container.createComponent(factory);
 

   
   }
   sub(){
     console.log('X name:',this.xcom)
   }

   ngOnDestroy() {
    this.componentRef.destroy();    
  }
  ngOnInit(): void {
  }
}
