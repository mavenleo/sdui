export interface NewsFeed {
  id: number;
  title: string;
  body: string;
  author: string;
  [key: string]: number | string;
}
// type SortBy = {
//   property: string;
//   direction: string;
// };

export interface FilterOptions {
  q: string;
  sortBy: {
    property: string;
    direction: string;
  };
}

export interface NewsFeedsState {
  newsFeeds: NewsFeed[];
  filteredNewsFeeds: NewsFeed[];
  filterOptions: FilterOptions;
}
