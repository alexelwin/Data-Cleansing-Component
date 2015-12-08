import {Injectable, Inject} from 'angular2/angular2';
import {Http, Response  } from 'angular2/http';


/**
 * abstract base class for http services to encapsulate http related properties.
 */
@Injectable()
export abstract class Service{
	
	
	private _http: Http;
	private _serviceHost: string;
	
	/**
	 * @constructor
	 * @param {string} serviceHost - base host name for api http requests
	 * @param {Http} http - Http service to perform infrastructure/transport related operations over http 
	 */
	 constructor(serviceHost: string, @Inject(Http) http:Http){
		this._serviceHost = serviceHost;	
		this._http = http;
	}
	
	/**
	 * getServiceHost - gets the base host name for http requests
	 * @returns {string} base host name for api http requests 
	 */
	public getServiceHost(): string{
		return this._serviceHost;
	}
	
	/**
	 * Http
	 * @returns {Http} http - Http service to perform infrastructure/transport related operations over http
	 *  */ 
	public getHttp(): Http{
		return this._http;
	}
	
}