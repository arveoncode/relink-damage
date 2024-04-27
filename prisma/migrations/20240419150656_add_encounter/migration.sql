-- CreateTable
CREATE TABLE "Encounter" (
    "encounterId" TEXT NOT NULL,
    "createdAt" DATE NOT NULL,
    "startTime" BIGINT NOT NULL,
    "endTime" BIGINT NOT NULL,
    "totalDamage" DOUBLE PRECISION NOT NULL,
    "dps" DOUBLE PRECISION NOT NULL,
    "targets" JSONB NOT NULL,

    CONSTRAINT "Encounter_pkey" PRIMARY KEY ("encounterId")
);

-- CreateTable
CREATE TABLE "EncounterParty" (
    "encounterPartyId" TEXT NOT NULL,
    "encounterId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "characterType" TEXT NOT NULL,
    "totalDamage" DOUBLE PRECISION NOT NULL,
    "dps" DOUBLE PRECISION NOT NULL,
    "skillBreakdown" JSONB NOT NULL,

    CONSTRAINT "EncounterParty_pkey" PRIMARY KEY ("encounterPartyId")
);

-- AddForeignKey
ALTER TABLE "EncounterParty" ADD CONSTRAINT "EncounterParty_encounterId_fkey" FOREIGN KEY ("encounterId") REFERENCES "Encounter"("encounterId") ON DELETE CASCADE ON UPDATE CASCADE;
