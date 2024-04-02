import { z } from "zod";

const overmasteries = z.object({
  attack: z.number().gte(0).lte(1000),
  normalDamageCapUp: z.number().gte(0).lte(20),
  skillDamageCapUp: z.number().gte(0).lte(20),
  sbaDamageCapUp: z.number().gte(0).lte(20),
  skillDamageUp: z.number().gte(0).lte(20),
  sbaDamageUp: z.number().gte(0).lte(20),
  critHitRate: z.number().gte(0).lte(20),
});

export type Overmasteries = z.infer<typeof overmasteries>;
