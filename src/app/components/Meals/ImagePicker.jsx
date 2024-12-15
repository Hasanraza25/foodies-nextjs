"use client";
import { useRef, useState } from "react";
import styles from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputRef = useRef();
  function handlePickImage() {
    inputRef.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Picked Image</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked Image" fill />}
        </div>
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
          onChange={handleImageChange}
        />
        <button
          type="button"
          className={styles.button}
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
