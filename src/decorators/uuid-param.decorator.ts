// uuid-param.decorator.ts
import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { IsUUID, validateOrReject } from 'class-validator';

class UUIDValidation {
  @IsUUID(4)
  id: string;
}

export const ValidUUID = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const id = request.params.id;

    const UUIDValidator = new UUIDValidation();
    UUIDValidator.id = id;

    try {
      await validateOrReject(UUIDValidator);
    } catch (errors) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: errors.map((error) => Object.values(error.constraints)),
          error: 'Bad Request',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return id;
  },
);
