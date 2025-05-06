import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
})

export class Sort implements PipeTransform
{
    transform(value: Array<any>) {
        if(!value) return;
        return value.sort();
    }
}