import { DiaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json' // En ts.config en advanced options -> "resolveJsonModule": true

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // Le digo que es de ese tipo

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((elem) => elem.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ date, id, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
