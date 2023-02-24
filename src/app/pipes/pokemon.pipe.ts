import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'pokemon'
})
export class PokemonPipe implements PipeTransform {
    transform(value: string) {
        let result = '';
        value = value.toLowerCase();
        for(const letter of value) {
            if(Math.random() > 0.5) {
                result += letter.toUpperCase();
            }
            else {
                result += letter;
            }
        }

        result += ' ' + emojis[Math.floor(Math.random()*emojis.length)];
        return result;
    }
}

const emojis: string[] = [':D', ':-)', ';)', '( ͡° ͜ʖ ͡°)'] 