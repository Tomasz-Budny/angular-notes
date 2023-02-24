import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { debounceTime, first, map, switchMap } from "rxjs/operators";

export function doesntHaveAnyPolishProfanities(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let isContainingProfanities = false;
        const value: string = control.value?.toLowerCase();
        
        profanities.forEach(profanity => {
            if(value.includes(profanity)) {
                isContainingProfanities = true;
            }
        });

        return isContainingProfanities ? {profanity: control.value} : null;
    }
}

export function containsOnlyLowerCaseLetters(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} | null => {
        const lower = control.value.toLowerCase();
        if(lower === control.value) {
            return null;
        }
        else return {isLower: false};
    }
}

// Na pierszy rzut oka pokręcone ale jest to sposób aby skutecznie debouncing zaimplementować

//https://stackoverflow.com/questions/36919011/how-to-add-debounce-time-to-an-async-validator-in-angular-2
export function NickisUnique(time): AsyncValidatorFn {
    return (control: AbstractControl):  Observable<ValidationErrors | null> => {
        return control.valueChanges
          .pipe(
            debounceTime(time),
            switchMap(value => new Observable(observer => {
                console.log('choppin damn thangs')
                setTimeout(() => {
                    if(control.value === 'Tomo') {
                        observer.next(false);
                    }
                    else {
                        observer.next(true)
                    }
                    observer.complete();
                }, time)
            })),
            map((unique: boolean) => (unique ? null : {nickNotUnique: control.value})),
            first()
          )
    }
} 

const profanities = ['kurwa', 'chuj', 'cwel', 'dziwka', 'pindol', 'jebanie', 'jebak', 'kapa', 'gówno', 'jejebak']