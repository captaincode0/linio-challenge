package util

/**
 * [BoolToInt converts one boolean to integer 0 or 1]
 * @param b bool 	boolean value to convert
 * @returns uint8 	8-bit integer
 *
 * This helper function is used cause Go 
 * doesn't support convertions between 
 * int and bool directly
 */
func BoolToInt(b bool)uint8{
	if b{
		return 1
	}

	return 0
}