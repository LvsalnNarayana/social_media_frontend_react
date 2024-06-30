/* eslint-disable max-lines */
import { useState } from "react";

const useSearchHistory = () => {
  const searchHistoryResults = [
    {
      id: "search_1",
      term: "Hogwarts",
      resultsCount: 100,
      timestamp: "2023-06-01T10:00:00Z",
    },
    {
      id: "search_2",
      resultsCount: 200,
      term: "Quidditch World Cup",
      timestamp: "2023-06-02T12:30:00Z",
    },
    {
      id: "search_3",
      resultsCount: 50,
      term: "Auror career",
      timestamp: "2023-06-03T15:45:00Z",
    },
    {
      id: "search_4",
      resultsCount: 75,
      term: "Dumbledore's Army",
      timestamp: "2023-06-04T09:20:00Z",
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [searchHistory, setSearchHistory] = useState(searchHistoryResults);

  return searchHistory;
};

export default useSearchHistory;
