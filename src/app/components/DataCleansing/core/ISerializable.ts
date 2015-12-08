
/**
 * Interface to describe serialization contract
 * @Interface ISerializable
 */
export interface ISerializable{
	
	/**
	 * deserialize
	 * @input {Object} - object to deserialize
	 */
	deserialize(input: Object)
}