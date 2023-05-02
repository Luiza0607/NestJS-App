/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  //  Length,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;
}
