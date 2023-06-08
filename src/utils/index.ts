import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 10);

export const getId = () => "bucket";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
