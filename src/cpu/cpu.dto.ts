export class CpuDto {
    typeProcessor: string;
    cores: number;
    brand: string;
    consumption: string;
    
    constructor(partial: Partial<CpuDto>) {
      Object.assign(this, partial);
    }
  }