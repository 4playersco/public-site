import fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";

// import type { Image } from "~/types";

export const getGallery = async () => {
  const imagesDirectory = path.join(process.cwd(), "public/images/gallery");
  const galleryList = await fs.readdir(imagesDirectory, {
    withFileTypes: true,
  });

  if (!galleryList) return notFound();

  return galleryList
    .filter((item) => !item.isDirectory())
    .filter((file) => !file.name.includes(".DS_Store"))
    .map((file) => {
      return {
        id: file.name.split(".jpg")[0],
        src: `/images/gallery/${file.name}`,
      };
    });
};
