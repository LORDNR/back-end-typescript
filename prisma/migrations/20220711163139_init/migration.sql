/*
  Warnings:

  - You are about to drop the `subcategories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `subcategories` DROP FOREIGN KEY `subcategories_cgId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `name` VARCHAR(255) NULL,
    ADD COLUMN `phone` VARCHAR(10) NULL;

-- DropTable
DROP TABLE `subcategories`;
