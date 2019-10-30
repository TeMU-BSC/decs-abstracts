import { Article } from './article.model';

export interface Company {
    id: string,
    hash?: string | Int32Array,
    articles: Article[]
}