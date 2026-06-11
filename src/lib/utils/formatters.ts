export function absoluteUrl(path: string, baseUrl: string) {
  return new URL(path, baseUrl).toString();
}
