import { readFile } from "node:fs/promises";
import path from "node:path";
import { defaultLocale, locales } from "./config";

export async function getMessages(locale = defaultLocale) {
  const normalizedLocale = locales.includes(locale) ? locale : defaultLocale;
  const filePath = path.join(process.cwd(), "messages", `${normalizedLocale}.json`);
  const file = await readFile(filePath, "utf8");
  return JSON.parse(file);
}
