import { originsList } from "../main";

export const corsConfig = {
  origin: originsList,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};
