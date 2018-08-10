import {DELETE_ARTICLE, INCREMENT, CHANGE_SELECTION, GET_FLOWERS, GET_FLOWER} from "../constance";

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}

export function getFlowers() {
  return {
    type: GET_FLOWERS,
    callAPI: 'tasks/',
  }
}

export function getFlower(id) {
  return {
    type: GET_FLOWER,
    callAPI: `tasks/${id}`,
  }
}