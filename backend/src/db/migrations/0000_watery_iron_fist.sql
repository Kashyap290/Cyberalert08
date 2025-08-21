CREATE TABLE "enlight" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"note_id" integer NOT NULL,
	"title" text NOT NULL,
	"image" text,
	"learn_time" text,
	"servings" text,
	"created_at" timestamp DEFAULT now()
);
