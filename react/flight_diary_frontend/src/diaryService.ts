import axios from 'axios';
import { DiaryEntry, NewDiaryEntry, ValidationError } from "./types";

const baseUrl = 'http://localhost:3000/api/diaries'

export const getAllDiaries = () => {
  return axios
    .get<DiaryEntry[]>(baseUrl)
    .then(response => response.data)
}

export const createDiaryEntry = async (object: NewDiaryEntry, errorMessageHandler : (error: string) => void) => {
  try{
    const response = await axios.post<DiaryEntry>(baseUrl, object);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
      console.log("error:", error.response?.request.responseText);
      errorMessageHandler(error.response?.request.responseText);
    } else {
      console.error(error);
    }
  }
}