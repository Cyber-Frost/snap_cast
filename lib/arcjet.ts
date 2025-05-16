import { getEnv } from "@/lib/utils";
import arcjet from "@arcjet/next";

const aj = arcjet({
  key: getEnv("ARCJET_API_KEY"),
  rules: [],
});

export default aj;
