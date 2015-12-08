
import {DataQualityResult} from './DataQualityResult';
import{ISerializable} from './ISerializable';

/**
 * DataQUalityEntity
 * Class to encapsulate the most granular
 * @Interface ISerializable
 */
export class DataQualityEntity implements ISerializable{
	public companyId: number;
	public crmLink: string;
	public results: Array<DataQualityResult>; 
	
	/**
	 * deserialize
	 * @parameter {Object} object to deserialize
	 */
	public deserialize(input){
		
		//CompanyId
		this.companyId = input.companyId;
		this.crmLink = "https://mrcoffee.webcentral.com.au/Authorised/job_add_searchby.cfm?search=" + this.companyId + "&searchby=id";
		
		this.results = [];
		for(var i = 0; i < input.Results.length; i++){
			var result:DataQualityResult = new DataQualityResult(); 
			result.deserialize(input.Results[i]);
			this.results.push(result);
		}
	}	
}