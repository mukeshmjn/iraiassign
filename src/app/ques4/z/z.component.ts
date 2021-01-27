import {Component, NgModule,Input,ComponentFactory,ComponentRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, TemplateRef, ViewChild, Output, EventEmitter, OnInit} from '@angular/core'
import {XComponent} from '../x/x.component';
@Component({
  selector: 'app-z',
  templateUrl: './z.component.html',
  styleUrls: ['./z.component.scss']
})
export class ZComponent implements OnInit {
  @ViewChild("alertContainer", { read: ViewContainerRef }) container;
  componentRef: ComponentRef<any>;
  
   constructor(private resolver: ComponentFactoryResolver) {}
   createComponent(){
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(XComponent);
    this.componentRef = this.container.createComponent(factory);
 

   
   }

   ngOnDestroy() {
    this.componentRef.destroy();    
  }
   
  ngOnInit(): void {
  }

}
