import {ISerializable} from './ISerializable';

/**
 * DataQualityResult
 * Encapsulate the result of a quality check performed on a customer / field combination.
 */
export class DataQualityResult implements ISerializable
	{
		/**
		 * field - generic holder for migration entity field name. i.e. "company_name"
		 */
		public field:string;
		
		/**
		 * message - validation message resulting from a check on a migration field
		 */
		public message:string;
	
	/**
	 * deserialize
	 * @input {object}  object to deserialize
	 */	
	public deserialize(input){
		this.field = input.Field;
		this.message = input.Message;
	}
}
