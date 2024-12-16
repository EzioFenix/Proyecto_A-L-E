import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {
  private dbName = 'ALE-appStorage';
  private dbVersion = 1;
  private db!: IDBDatabase | null;

  constructor() { }

  open(): void {
    const request = indexedDB.open(this.dbName, this.dbVersion);

    request.onsuccess = (event: Event) => {
      this.db = (event.target as IDBOpenDBRequest).result;
      console.log('Database connection established successfully.');
    };

    request.onerror = (event: Event) => {
      console.error('Failed to establish database connection:', (event.target as IDBOpenDBRequest).error);
    };

    request.onblocked = () => {
      console.warn('Database connection is blocked. Close other tabs or applications using this database.');
    };
  }

  close(): void {
    if (this.db) {
      this.db.close();
      console.log('Database connection closed.');
      this.db = null;
    } else {
      console.warn('No open database connection to close.');
    }
  }
}
