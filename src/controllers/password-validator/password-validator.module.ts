import { Module } from '@nestjs/common';
import { PasswordValidatorController } from './password-validator.controller';
import { PasswordValidatorService } from './password-validator.service';

@Module({
	imports: [],
	controllers: [PasswordValidatorController],
	providers: [PasswordValidatorService],
})
export class PasswordValidatorModule {}
