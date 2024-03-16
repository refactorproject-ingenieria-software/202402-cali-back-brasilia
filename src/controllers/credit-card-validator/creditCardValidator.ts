import { card as luhn } from 'luhn-validation';
type CreditCardInfo = {
	creditCardNumber: string;
	expiryDate: string;
};

export type CreaditCardValidationResult = {
	isValid: boolean;
	errorMessage?: string;
};

export const creditCardValidator = ({
	creditCardNumber,
	expiryDate,
}: CreditCardInfo): CreaditCardValidationResult => {
	const creaditCardValidationResult = {
		isValid: true,
		errorMessage: '',
	};
	if (!expiryDate || !creditCardNumber) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessage = 'Provide all info';
		return creaditCardValidationResult;
	}
	if (creditCardNumber.length < 16) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessage =
			'The card must have at least 16 digits';
		return creaditCardValidationResult;
	}
	if (!luhn(creditCardNumber)) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessage =
			'The card is not valid according to the Luhn algorithm';
		return creaditCardValidationResult;
	}
	return creaditCardValidationResult;
};
