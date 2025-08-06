export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: string;
  tags: string[];
  content: string;
  readingTime: number;
  featured?: boolean;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags: string[];
  featured?: boolean;
}

export interface BlogSearchParams {
  query?: string;
  tag?: string;
  page?: number;
}