import { DiskService } from './../disk/disk.service';
import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
import { CpuDto } from './cpu.dto';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService ) {}

  getInfoCPU(): CpuDto {
    const power = this.powerService.supplyPower("400"); 
    
    return new CpuDto({
      typeProcessor: "HexaCore",
      cores: 6,
      brand: "intel",
      consumption: power.whatts 
  });
  }
}
