-- CreateTable
CREATE TABLE `Layanan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaLayanan` VARCHAR(191) NOT NULL,
    `fotoLayanan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
