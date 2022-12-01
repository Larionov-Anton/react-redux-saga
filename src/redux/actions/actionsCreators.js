import {
  DECREASE_COUNT,
  INCREASE_COUNT,
  GET_LATEST_NEWS,
  SET_LATEST_NEWS,
	SET_POPULAR_NEWS,
	GET_NEWS,
	SET_POPULAR_NEWS_ERROR,
	SET_LATEST_NEWS_ERROR,
	HIDE_ERROR,
} from "../types";

export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

export const getLatestNewsAction = () => ({
  type: GET_LATEST_NEWS,
});

export const getNews = () => ({
  type: GET_NEWS,
});

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload,
});

export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload,
});

export const setPopularNewsError = (payload) => ({
  type: SET_POPULAR_NEWS_ERROR,
  payload,
});

export const setLatestNewsError = (payload) => ({
  type: SET_LATEST_NEWS_ERROR,
  payload,
});

export const hideError = () => ({
  type: HIDE_ERROR
});
