/* eslint-disable prettier/prettier */
//export type CreateProductDTO = {
  //name: string;
  //price: number;
  //description: string;
//};

import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : ''))
  description: string;
};