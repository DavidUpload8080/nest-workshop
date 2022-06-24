export class DiskDto {
    type: string;
    capacity: string;
    consumption: string;
    
    constructor(partial: Partial<DiskDto>) {
      Object.assign(this, partial);
    }
  }