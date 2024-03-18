import { Injectable } from '@nestjs/common';
import { PasswordValidatorResponse } from './password-validator.types';

@Injectable()
export class PasswordValidatorService {
	validatePassword(password: string): PasswordValidatorResponse {
		const errors: string[] = [];
		const isValidLength = password.length >= 8;

		if (!isValidLength) errors.push('Password must be at least 8 characters');

		return {
			isValid: isValidLength,
			errors: errors,
		};
	}
}
