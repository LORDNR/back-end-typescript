/*
  Warnings:

  - You are about to alter the column `userlevel` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(1)`.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `data` required. This step will fail if there are existing NULL values in that column.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `area_id_key` ON `area`;

-- AlterTable
ALTER TABLE `category` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `data` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `detail` TEXT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `username` VARCHAR(255) NOT NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `userlevel` VARCHAR(1) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);
