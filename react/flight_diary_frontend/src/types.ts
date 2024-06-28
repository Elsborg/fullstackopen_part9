export enum Weather {
    Sunny = 'Sunny',
    Rainy = 'Rainy',
    Cloudy = 'Cloudy',
    Windy = 'Windy',
    Stormy = 'Stormy',
}

export enum Visibility {
    Great = 'Great',
    Good = 'Good',
    Ok = 'Ok',
    Poor = 'Poor',
} 

export interface DiaryEntry {
    id: number;
    date: string;
    weather: Weather
    visibility: string;
    comment: string;
}


export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export interface ValidationError {
    message : string;
    errors: Record<string, string[]>
  }  