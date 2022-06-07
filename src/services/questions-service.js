import axios from "axios";

const API_BASE = process.env.REACT_APP_ANIME_API || "http://localhost:4000/api";
const QUESTION_API = `${API_BASE}/questions`

export const fetchQuestionByID = async (questionID) => {
  const response = await axios(`${QUESTION_API}/${questionID}`)
  return response.data
}