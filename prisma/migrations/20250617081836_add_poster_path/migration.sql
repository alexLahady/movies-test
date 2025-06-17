-- Étape 1 : ajouter la colonne en nullable
ALTER TABLE "Movies" ADD COLUMN "poster_path" TEXT;

-- Étape 2 : remplir les lignes existantes avec une valeur par défaut
UPDATE "Movies" SET "poster_path" = '';

-- Étape 3 : rendre la colonne obligatoire
ALTER TABLE "Movies" ALTER COLUMN "poster_path" SET NOT NULL;

