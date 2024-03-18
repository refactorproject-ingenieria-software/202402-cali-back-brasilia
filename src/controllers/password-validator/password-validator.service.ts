import { Injectable } from '@nestjs/common';
import { PasswordValidatorResponse } from './password-validator.types';

@Injectable()
export class PasswordValidatorService {
	validatePassword(password: string): PasswordValidatorResponse {
		const errors: string[] = [];
		const isValidLength = password.length >= 8;
		const containsTwoNumbers = password.match(/[0-9]/g).length >= 2;
		const containsCapitalLetter = /[A-Z]/.test(password);

		if (!isValidLength) errors.push('Password must be at least 8 characters');

		if (!containsTwoNumbers)
			errors.push('Password must contain at least 2 numbers');

		if (!containsCapitalLetter)
			errors.push('Password must contain at least 1 capital letter');

		return {
			isValid: isValidLength && containsTwoNumbers && containsCapitalLetter,
			errors: errors,
		};
	}
}
