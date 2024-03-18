import { Injectable } from '@nestjs/common';
import { PasswordValidatorResponse } from './password-validator.types';

@Injectable()
export class PasswordValidatorService {
	validatePassword(password: string): PasswordValidatorResponse {
		// TODO: Validation logic.
		const asd = password;
		return asd as unknown as PasswordValidatorResponse;
	}
}
