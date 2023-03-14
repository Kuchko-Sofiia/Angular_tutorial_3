import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { publishLast } from "rxjs";

export class Hero {

    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }
}