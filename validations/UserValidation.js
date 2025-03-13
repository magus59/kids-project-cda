const { z } = require("zod");

const userSchema = z.object({
  pseudo: z
    .string()
    .min(4, "Le pseudo doit contenir au moins 4 caractères")
    .max(15, "Le pseudo ne peut pas dépasser 15 caractères"),

  email: z
    .string()
    .email("L'email n'est pas valide"),

  role: z
    .enum(["user", "admin"])
    .default("user"),

  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

module.exports = userSchema;
