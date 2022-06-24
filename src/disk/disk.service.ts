import { DiskDto } from './disk.dto';
import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): DiskDto {
      const powerData = this.powerService.supplyPower("20")
     
     return new DiskDto({
        type: "SOLID",
        capacity: "100GB",
        consumption: powerData.whatts
    });
  }
}


