// Keep public assets working on root domains and sub-path deployments
// (for example GitHub Pages /repository/).
export function assetUrl(path) {
  const clean = String(path).replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}
