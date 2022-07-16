/*
  Warnings:

  - Made the column `cgId` on table `data` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `data` DROP FOREIGN KEY `data_cgId_fkey`;

-- AlterTable
ALTER TABLE `data` MODIFY `cgId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `data` ADD CONSTRAINT `data_cgId_fkey` FOREIGN KEY (`cgId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
