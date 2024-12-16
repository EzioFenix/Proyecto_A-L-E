import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {

  allLanguagesFile= "allLenguageExist.json"

  constructor() { }


  async getAllLanguages(): Promise<string[]> {
    try {
      const response = await fetch(this.allLanguagesFile);
      if (!response.ok) {
        console.error(`Failed to fetch languages. Status: ${response.status}`);
        return [];
      }
      const data: string[] = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred while fetching languages:', error);
      return [];
    }
  }
  
}
