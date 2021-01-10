import { ElementRef } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { map } from 'rxjs/operators';

export function unpackMutation<T, K extends keyof T>(fieldName: K) {
  return map(
    (mutationResult: FetchResult<T>): NonNullable<T[K]> => {
      if (mutationResult?.data) {
        return mutationResult?.data[fieldName] as NonNullable<T[K]>;
      } else {
        throw mutationResult.errors;
      }
    }
  );
}

export function setCssVariable(
  element: ElementRef,
  variable: string,
  value: string
) {
  element.nativeElement.style.setProperty(variable, `var(--${value})`);
  element.nativeElement.style.setProperty(variable, value);
}
