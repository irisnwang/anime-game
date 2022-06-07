import axios from "axios";

const API_BASE = process.env.ANIME_API_BASE || "http://localhost:4000/api"
const QUESTION_API = `${API_BASE}/questions`

export const fetchQuestionByID = async (questionID) => {
  const response = await axios(`${QUESTION_API}/${questionID}`)
  return response.data
}