export const highlightMatchString = (string: string, query: string): string => {
  const foundInString = string.toLowerCase().includes(query);

  if (foundInString) {
    return string.replace(new RegExp(query, "gi"), (match) => {
      return `<span class='text-highlight'>${match}</span>`;
    });
  }

  return string;
};
