import { Entry } from "../api/entry.models";

export class EntryViewModel{
    private _name:    string;
    private _grade:    Grade;
    private _adrLine1: string;
    private _adrLine2: string;
    private _postalCode: string;
    private _postalCity: string; 
    private _date: string; 

    constructor(entry: Entry) {
        this._name = entry.navn;
        this._grade = entry.total_karakter;
        this._adrLine1 = entry.adrlinje1;
        this._adrLine2 = entry.adrlinje2;
        this._postalCode = entry.postnr;
        this._postalCity = entry.poststed;
        
    }
    
    get name(): string { return this._name; }
    get grade(): Grade { return this._grade; }
    get adrLine1(): string { return this._adrLine1; }
    get adrLine2(): string { return this._adrLine2; }
    get postalCode(): string { return this._postalCode; }
    get postalCity(): string { return this._postalCity; }
    get date(): string { return this._date; }
  }

  export enum Grade {
    Best,
    Good,
    Average,
    Bad
  }
  