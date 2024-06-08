"use client";
import React, { FC } from "react";
import Carousel from "nuka-carousel";
import NextImage from "next/image";

import Container from "../../utility/Container";

import type { Image } from "~/types";
import styles from "./Gallery.module.scss";

type GalleryProps = {
  images: Image[];
};

const Gallery: FC<GalleryProps> = ({ images = [] }) => {
  return (
    <div className={styles.Gallery}>
      <Container>
        <div className={styles.galleryWrapper}>
          <Carousel>
            {images!.map((img: Image) => {
              return (
                <NextImage
                  key={img.id}
                  src={img.src}
                  alt={`Fourwheeling ${img.id}`}
                  width="960"
                  height="600"
                />
              );
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
