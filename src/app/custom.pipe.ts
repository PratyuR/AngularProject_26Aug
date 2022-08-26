import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if(gender=="male")
    {
      return 'mrs.'+ name;
    }
    else
    return 'miss.'+ name;


  }

}
