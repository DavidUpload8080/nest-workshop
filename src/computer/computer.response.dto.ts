export class ComputerResponseDto {
    typeProcessor: string;
    numbercores: number;
    ComputerBrand: string;
    consumption: string;
    typeDisk: string;
    capacityDisk: string;
    
    constructor(partial: Partial<ComputerResponseDto>) {
      Object.assign(this, partial);
    }
  }