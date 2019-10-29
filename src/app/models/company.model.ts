import { Article } from './article.model';

export interface Company {
    id: string,
    articles: Article[]
}