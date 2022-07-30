import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class FilterProjectDto {
  @IsOptional()
  title?: string;

  @IsNumber()
  @IsNotEmpty()
  uid: number;
}
