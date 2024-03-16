import { card as luhn } from 'luhn-validation';
import valid from 'card-validator';
import creditCardType, { types as CardType } from 'credit-card-type';

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
	//Visa, Mastercard, American Express o Diners Club
	console.log('>>>>>>>>>>>', valid.number(creditCardNumber).card.type);
	if (
		creditCardType(creditCardNumber).filter(
			(cardType) =>
				cardType.type === CardType.VISA ||
				cardType.type === CardType.MASTERCARD ||
				cardType.type === CardType.AMERICAN_EXPRESS ||
				cardType.type === CardType.DINERS_CLUB,
		).length === 0
	) {
		creaditCardValidationResult.isValid = false;
		creaditCardValidationResult.errorMessages.push(
			'The card must be from one of the following networks: Visa, Mastercard, American Express or Diners Club',
		);
	}
	return creaditCardValidationResult;
};
