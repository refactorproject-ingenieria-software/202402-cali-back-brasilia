import { card as luhn } from 'luhn-validation';
type CreditCardInfo = {
	creditCardNumber: string;
	expiryDate: string;
};

export type CreaditCardValidationResult = {
	isValid: boolean;
	errorMessages?: string[];
};

export const creditCardValidator = ({
	creditCardNumber,
	expiryDate,
}: CreditCardInfo): CreaditCardValidationResult => {
	const creaditCardValidationResult = {
		isValid: true,
		errorMessages: [],
	};
	if (!expiryDate || !creditCardNumber) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessages.push('Provide all info');
	}
	if (creditCardNumber.length < 16) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessages.push(
			'The card must have at least 16 digits',
		);
	}
	if (!luhn(creditCardNumber)) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessages.push(
			'The card is not valid according to the Luhn algorithm',
		);
	}
	return creaditCardValidationResult;
};
