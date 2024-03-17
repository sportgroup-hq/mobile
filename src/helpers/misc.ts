export function generatePath(path: string, params: Record<string, string>) {
  return Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, value),
    // eslint-disable-next-line prettier/prettier
    path
  );
}
