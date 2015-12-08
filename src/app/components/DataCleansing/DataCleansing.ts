
import {bootstrap, Component} from 'angular2/angular2';
import {AppSettings} from './AppSettings';
import {Http} from 'angular2/http';
import {CORE_DIRECTIVES} from 'angular2/angular2';
import {Grid} from '../grid/Grid';
import {Router} from 'angular2/router';
import {QualityService} from './service/QualityService';
import {DataQualityEntity} from './core/DataQualityEntity';
import { HTTP_PROVIDERS  } from 'angular2/http';
import {provide} from 'angular2/angular2';
import {Service} from './service/Service';
import {Injectable, Inject} from 'angular2/angular2';


/**
 * Author: Alex Elwin
 * Top level directive to display data cleansing / quality report.
 * @constructor
 * @param {QualityService} qualityService - backend service to encapsulate data quality operations.
 */
@Component({
    selector: 'data-cleansing',
    template: `<div *ng-if="isLoading() == false">
                <h4>Company</h4>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <tr>
                            <th>company Id</th>
                            <th>validation message</th>
                            <th>mr coffee</th>
                        </tr>
                        <tr *ng-for="#entity of entities">
                            <td>{{entity.companyId}}</td>
                            <td><span *ng-for="#result of entity.results"><b>{{result.field}}</b><br><i>{{result.message}}</i><br></span></td>
                            <td><a (click)="gotoCrm(entity.crmLink)">mr coffee</a></td>
                        </tr>
                    </table>
                </div>
               </div>
                
                <div class="progress" *ng-if="isLoading()">
                    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                    LOADING...
                    </div>
                </div>`,
    directives: [Grid, CORE_DIRECTIVES]            
})
class DataCleansing {
     
    private _rows: Object[];
    private _qualityService: QualityService;
    public entities:Array<DataQualityEntity>;
    private _isLoading: boolean = true;
     
    constructor(qualityService: QualityService){
        this._qualityService = qualityService;
        console.log('calling service');
        this._qualityService.GetReport()
        .subscribe(results => {this.entities = results;
                               this._isLoading = false;});
  }
  
 /**
 * Redirect user to CRM
 * @param {string} link - crm url 
 */
  public gotoCrm(link:string){
      window.open(link, '_blank' );
      console.log('going to mr coffee');
  }
  
  /**
   * flag if component is in loading state
   * @return {boolean} true if component is currently in a state of loading.
   */
  public isLoading(): boolean{
      return this._isLoading;
  }
        
}    

/*DEPENDENCY INJECTION CONFIGURATION*/

//QualityService
let qualityServiceClassFactory = ( settings: AppSettings, http: Http) => { return new QualityService(settings.serviceHost(),  http);} 
let qualityServiceProvider = provide(QualityService, { useFactory: qualityServiceClassFactory, deps: [AppSettings,Http] });

//component bootstrapping with providers
bootstrap(DataCleansing, [HTTP_PROVIDERS,  qualityServiceProvider, AppSettings]); 