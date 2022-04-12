export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

// Otra forma:
// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id'| 'date'| 'weather'| 'visibility'> // Son todos menos el msg

export type newDiaryEntry = Omit<DiaryEntry, 'id'>
