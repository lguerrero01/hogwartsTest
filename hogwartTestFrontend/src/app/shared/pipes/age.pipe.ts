import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number | string): string {

    if(value === ""){
      return "-";
    }    
    const age = new Date().getFullYear() - Number(value);
    return age.toString();
  }

}
