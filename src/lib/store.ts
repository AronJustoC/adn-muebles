import type { ImageMetadata } from "astro";

import store from "../data/store.json";

const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/escritorio/*.{png,jpg,jpeg,webp,avif}",
  { eager: true },
);

export const money = (amount: number) => `S/ ${amount}`;

export const whatsappLink = (message: string) =>
  `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(message)}`;

export const resolveProductImage = (publicPath: string): ImageMetadata => {
  const fileName = publicPath.split("/").pop();
  const module = imageModules[`../assets/escritorio/${fileName}`];

  if (!module) {
    throw new Error(`No se encontró la imagen del producto: ${publicPath}`);
  }

  return module.default;
};
