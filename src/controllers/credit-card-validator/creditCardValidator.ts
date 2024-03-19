import { card as luhn } from 'luhn-validation';

type CreditCardInfo = {
	creditCardNumber: string;
	expiryDate: string;
};

export type CreaditCardValidationResult = {
	isValid: boolean;
	errorMessages?: string[];
};
// Following Networks: VISA-4 , MC-51-55, AE-37, 34, 35, DC-300, 305, 36, 38
const validStartCombinations = [
	4, 51, 52, 53, 54, 55, 37, 34, 35, 300, 305, 36, 38,
];

const checkCardType = (
	creditCardNumber: string,
	validStartCombinations: number[],
): boolean => {
	return validStartCombinations.some((validStart) =>
		creditCardNumber.startsWith(String(validStart)),
	);
};

const checkExpiryDate = (expiryDate: CreditCardInfo['expiryDate']) => {
	const today = new Date();
	const formatExpiryMonth = Number(expiryDate.split('/')[0]) - 1;
	const formatExpiryYear = Number(expiryDate.split('/')[1]) + 2000;
	const dateExpiryDate = new Date(formatExpiryYear, formatExpiryMonth);

	return today < dateExpiryDate;
};

export const creditCardValidator = ({
	creditCardNumber,
	expiryDate,
}: CreditCardInfo): CreaditCardValidationResult => {
	const creaditCardValidationResult = {
		isValid: true,
		errorMessages: [],
	};
	if (typeof expiryDate !== 'string' || typeof creditCardNumber !== 'string') {
		throw 'You must provide creditCardNumber and expiry date as strings';
	}
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

	if (!checkCardType(creditCardNumber[0], validStartCombinations)) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessages.push(
			'The card must be from one of the following networks: Visa, Mastercard, American Express or Diners Club',
		);
	}

	if (!checkExpiryDate(expiryDate)) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessages.push(
			'The card must have a valid expiration date',
		);
	}
	return creaditCardValidationResult;
};
