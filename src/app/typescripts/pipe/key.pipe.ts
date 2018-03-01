/**
 * Created by maphishaphanbuh on 19/05/17.
 */
import { Pipe, PipeTransform  } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

//convert url to safe url
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {}
    transform(url):any {
        let regex = /(https?:)?(\/\/)?(www\.|m\.)?(youtu\.be\/|youtube\.com\/(embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})([^\"]*)/i;
        let matches = url.match(regex);
        let embedLink='';
        if(matches[6]) {
            embedLink = "https://www.youtube.com/embed/"+matches[6]+'?autoplay=1&rel=0';
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
    }
}

//gives key and value
@Pipe({name: 'forkey'})
export class ForKeyPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}


@Pipe({name: 'FilterPipe'})
export class FilterPipe implements PipeTransform {
    transform(items: any[], field: string, value: string): any[] {
       if(value && value.trim() && value.length >0){
          if (!items) return [];
          return items.filter(it => it[field].toLocaleLowerCase().indexOf(value) > -1);
       }else{
          return items;
       }
       
    }
      
}
