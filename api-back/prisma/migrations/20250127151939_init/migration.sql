-- CreateTable
CREATE TABLE "atividades" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "inicio" TIMESTAMP(3) NOT NULL,
    "fim" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "atividades_pkey" PRIMARY KEY ("id")
);
