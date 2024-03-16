type CreditCardInfo = {
	creditCardNumber: string;
	expiryDate: string;
};

export const creditCardValidator = ({
	creditCardNumber,
	expiryDate,
}: CreditCardInfo): boolean => {
	if (expiryDate && creditCardNumber) {
		return true;
	}
	return false;
};
