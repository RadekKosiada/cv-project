export function formatDate(dateString) {
    const optionsForDate = { year: 'numeric', month: 'short'};
    const lang = "en-EN";
    return new Date(dateString).toLocaleDateString(lang, optionsForDate)
  }