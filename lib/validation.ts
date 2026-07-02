import { z } from "zod";

/** Request body for the booking endpoint. */
export const bookingRequestSchema = z.object({
  name: z.string().trim().min(1, "name is required").max(120),
  email: z.string().trim().email("a valid email is required").max(254),
  goal: z
    .string()
    .trim()
    .min(1, "tell us what you'd like help setting up")
    .max(2000),
  // Honeypot field — real users leave it empty; the ROUTE (not the schema)
  // silently accepts-and-drops filled honeypots so bots learn nothing.
  company: z.string().max(200).optional(),
});

export type BookingRequest = z.infer<typeof bookingRequestSchema>;
