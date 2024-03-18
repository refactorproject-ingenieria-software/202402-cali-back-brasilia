import { Injectable } from '@nestjs/common';
import { PasswordValidatorResponse } from './password-validator.types';

@Injectable()
export class PasswordValidatorService {
	validatePassword(password: string): PasswordValidatorResponse {
		const errors: string[] = [];
		const isValidLength = password.length >= 8;
		const containsTwoNumbers = password.match(/[0-9]/g).length >= 2;

		if (!isValidLength) errors.push('Password must be at least 8 characters');

		if (!containsTwoNumbers)
			errors.push('Password must contain at least 2 numbers');

		return {
			isValid: isValidLength && containsTwoNumbers,
			errors: errors,
		};
	}
}
