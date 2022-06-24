export class PowerDto {
    typePower: string;
    whatts: string;
    
    constructor(partial: Partial<PowerDto>) {
      Object.assign(this, partial);
    }
  }