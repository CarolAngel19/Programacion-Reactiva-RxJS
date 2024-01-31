import { of } from 'rxjs';
import { map } from 'rxjs/operators';

//Observable 
const observable = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
  map((num) => num % 2 === 1 ? num : undefined)
);

// Subscribe al Observable y mostrar resultados
observable.subscribe((num) => {
  if (num !== undefined) {
    console.log(num);
  }
});
