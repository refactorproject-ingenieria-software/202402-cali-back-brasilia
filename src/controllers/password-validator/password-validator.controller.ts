import { Controller, Post, Body } from '@nestjs/common';
import { PasswordValidatorService } from './password-validator.service';
import { PasswordValidatorResponse } from './password-validator.types';

@Controller('password-validator')
export class PasswordValidatorController {
	constructor(
		private readonly passwordValidatorService: PasswordValidatorService,
	) {}

	@Post()
	validatePassword(
		@Body('password') password: string,
	): PasswordValidatorResponse {
		return this.passwordValidatorService.validatePassword(password);
	}
}
