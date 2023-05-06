/* eslint-disable prettier/prettier */
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;
}
