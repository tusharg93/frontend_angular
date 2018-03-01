import { Directive, Input, HostBinding} from '@angular/core';

@Directive({
  
  selector: '[teeDate]'
})
export class DateConvertorDirective {
  @Input() currDate:any;
  @Input() type:string;
  @HostBinding('innerHTML') innerHTML;
  

  constructor() { }
  ngOnInit() {
    let theDate = this.currDate;
    let data;
    if(theDate){
      try{
        if(theDate.indexOf('-') > -1){
          theDate = theDate.split("-");
          let newDate = theDate[1]+"/"+theDate[2]+"/"+theDate[0];
          data = newDate;
        }else{
          data = parseInt(theDate)
        }
      }catch(e){
        console.log(e)
      }
      
      let d;
      if(this.type){
        d= new Date(data * 1000);
      }else{
        d= new Date(data);
      }
      console.log(d)
      if(d != 'Invalid Date') {
        let ourdate = d.toString().slice(3,15);
        let output = [ourdate.slice(0, 7), ',', ourdate.slice(7)].join('');
        console.log(output)
        this.innerHTML = output;
      }

    }

  }
  
}

