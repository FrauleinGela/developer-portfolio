import { useQuery } from "@tanstack/react-query";
import { fetchDevToArticles } from "../api/devto";
import { useDelayedShowLoading } from "./useDelayedLoading";
import type { PostInfo } from "../models/post";
import type { ApiDevtoArticle } from "../api/models";

const staleTime = 1000 * 60 * 5; // 5 minutes

export const useFetchArticles = () => {
  const toPostInfo = (article: ApiDevtoArticle): PostInfo => ({
    id: article.id,
    title: article.title,
    description: article.description,
    technologies: article.tag_list,
    link: article.url,
    publishedAt: article.published_at,
  });

  const query = useQuery({
    queryKey: ["devto-articles"],
    queryFn: fetchDevToArticles,
    staleTime,
    select: (articles) => articles.map((article) => toPostInfo(article)),
  });

  const showLoading = useDelayedShowLoading(query.isLoading);

  return {
    ...query,
    showLoading,
  };
}
