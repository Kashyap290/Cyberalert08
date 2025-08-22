CREATE TABLE `enlight` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`note_id` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`image` varchar(255),
	`learn_time` varchar(255),
	`servings` varchar(255),
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `enlight_id` PRIMARY KEY(`id`)
);
