-- AlterTable
ALTER TABLE `data` ADD COLUMN `areaId` INTEGER NULL;

-- CreateTable
CREATE TABLE `area` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,

    UNIQUE INDEX `area_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data` ADD CONSTRAINT `data_areaId_fkey` FOREIGN KEY (`areaId`) REFERENCES `area`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
