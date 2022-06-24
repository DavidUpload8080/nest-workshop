import { DiskService } from './../disk/disk.service';
import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { ComputerResponseDto } from './computer.response.dto';

 @Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService
    ) {}


  @Get()
  getInfoComputer(): ComputerResponseDto {
   const computerData = this.cpuService.getInfoCPU();
   const diskData = this.diskService.getData();

   return new ComputerResponseDto({
    typeProcessor: computerData.typeProcessor,
    numbercores: computerData.cores,
    ComputerBrand: computerData.brand,
    consumption: computerData.consumption,
    typeDisk: diskData.type,
    capacityDisk: diskData.capacity
}); 
  }
}

 