import { Injectable } from '@nestjs/common';
import { PasswordValidatorResponse } from './password-validator.types';

@Injectable()
export class PasswordValidatorService {
	validatePassword(password: string): PasswordValidatorResponse {
		const errors: string[] = [];
		const isValidLength: boolean = password.length >= 8;
		const containsTwoNumbers: boolean = password.match(/[0-9]/g)?.length >= 2;
		const containsCapitalLetter: boolean = /[A-Z]/.test(password);
		// This regular expression matches any character that is not a word character (equivalent to [^a-zA-Z0-9_]) or an underscore.
		const containsSpecialChars: boolean = /[\W_]/.test(password);

		if (!isValidLength) errors.push('Password must be at least 8 characters');

		if (!containsTwoNumbers)
			errors.push('Password must contain at least 2 numbers');

		if (!containsCapitalLetter)
			errors.push('Password must contain at least 1 capital letter');

		if (!containsSpecialChars)
			errors.push('Password must contain at least 1 special character');

		return {
			isValid:
				isValidLength &&
				containsTwoNumbers &&
				containsCapitalLetter &&
				containsSpecialChars,
			errors: errors,
		};
	}
}
