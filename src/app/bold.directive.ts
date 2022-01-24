import { ElementRef , Directive, Renderer2, HostListener, HostBinding } from '@angular/core'

@Directive({
  selector: '[bold]'
})

export class BoldDirection {

  //constructor(private elementRef: ElementRef, private render: Renderer2) {
  //  this.render.setStyle(this.elementRef.nativeElement, "cursor", "pointer");
  //  //this.render.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
  //  //this.elementRef.nativeElement.style.fontWeight = "bold";
  //}

  private fontweight = "bold";

  @HostBinding("style.fontWeight") get getFontWeight(){
    return this.fontweight;
  }

  @HostBinding("style.Cursor") get getCursor() {
    return "pointer";
  }

  @HostListener("mouseenter") onMouseEnter() {
    //this.SetFontWeight("bold");
    this.fontweight = "bold";
  }

  @HostListener("mouseleave") onMouseLeave() {
    //this.SetFontWeight("normal");
    this.fontweight = "normal";
  }

  //private SetFontWeight(val: string) {
  //  this.render.setStyle(this.elementRef.nativeElement, "font-weight", val);
  //}
}
