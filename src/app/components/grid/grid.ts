/**
 * Author: Alex Elwin
 * Generic scaffolding component to display simple table data in html grid.
 * @param {headers} headers - table headers / column names.
 * @param {rows} rows - actual series data to display in grid.
 */
import {bootstrap, Component, CORE_DIRECTIVES, NgFor, Input} from 'angular2/angular2';
@Component({
    selector: 'grid',
    template: `<div class="table-responsive">
                <table class="table table-striped">
                    <tr>
                     <th *ng-for="#header of headers">{{header}}</th>
                    </tr>
                   <tr *ng-for="#row of rows">
                    <td *ng-for="#property of obj">{{property}}</td>
                   </tr>
                </table>
               </div>`,
directives: [CORE_DIRECTIVES, NgFor]
})
export class Grid { 
   @Input() headers: string[];
   @Input() rows: object<T>[];
}
