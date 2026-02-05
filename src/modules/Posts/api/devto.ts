import type { ApiDevtoArticle } from './models';

const username = 'angelapy';
const devtoAPIURL = 'https://dev.to/api';

export const fetchDevToArticles = async (): Promise<ApiDevtoArticle[]> => {
  const response = await fetch(
    `${devtoAPIURL}/articles?username=${username}`
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${errorText}`);
  }

  const data: ApiDevtoArticle[] = await response.json();
  return data;
}
