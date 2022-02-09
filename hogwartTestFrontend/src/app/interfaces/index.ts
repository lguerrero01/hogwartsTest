export interface OriginalData {
  name: string;
  age?: number;
  image: string;
  patronus: string;
  yearOfBirth?: number;
  dateOfBirth?: string;
}

export interface House {
  value: string;
}
export interface Character extends OriginalData {}

export interface Teacher extends OriginalData {}

export interface Student extends OriginalData {}

