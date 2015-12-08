
import {Http, Response  } from 'angular2/http';
import {Injectable, Inject} from 'angular2/angular2';
import {Observable} from 'angular2/core';
import {DataQualityEntity} from '../core/DataQualityEntity';
import {Service} from './Service';

/**
 QualityService - encapsulates implementations requarding migration data quality 
 @extends Service
 */
@Injectable()
export class QualityService extends Service{
		
	/**
	 * @constructor
	 * @param {string} serviceHost - base host name for api http requests
	 * @param {Http} http - Http service to perform infrastructure/transport related operations over http 
	 */
	constructor( serviceHost: string, http: Http){
		super(serviceHost, http);
	}
	
	/**
	 * getReportHeaders - get array of report headerrs / column names
	 * @returns {string[]} array containing report headers 
	 */
	getReportHeaders(): string[]{
		return ['vs', 'company'];	
	}
	
	/**
	 * getReportRows - get report data / content.
	 * @returns {string[][]} multidimensional array containing actual content / results for report  
	 */
	getReportRows() : string[][]{
		return [['vs1111','webcentral'],['vs22222','hyper']]
	}
	
	/**
	 * GetReport 
	 * @returns {Obervable<Array<DataQualityEntity>>} get observable containing a list of DataQualityEntity objects that describe the quality or lack of on a granular basis 
	 */
	GetReport(): Observable<Array<DataQualityEntity>> {
		
		//return observable to consumer	
		return	this.getHttp().get(this.getServiceHost() + '/apiv1/dataquality/company')
		.map((res: Response) => res.json())
		.map((res:any)  => {
			var entities:Array<DataQualityEntity> = [];
			for (var i = 0; i < res.Entities.length; i++)
			 {
            	var entity = new DataQualityEntity();
            	entity.deserialize(res.Entities[i]);
           		entities.push(entity);
			}
			return entities;
		});
	}   
} 


