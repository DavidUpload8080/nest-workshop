import { Injectable } from '@nestjs/common';
import { PowerDto } from './power.dto';

@Injectable()
export class PowerService {
  
  supplyPower(watts: string): PowerDto {
    // console.log(`Entregando ${watts} de of power.`);
      return new PowerDto({
        typePower: "Whatts",
        whatts: watts
    });
  }
}