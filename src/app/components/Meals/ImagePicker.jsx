"use client"
import { useRef } from "react";
import styles from "./ImagePicker.module.css";

export default function ImagePicker({ label, name }) {

    const inputRef = useRef();
    function handlePickImage(){
        inputRef.current.click();
    }
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input ref={inputRef} className={styles.input} type="file" id={name} accept="image/png, image/jpeg, image/jpg" name={name} />
        <button type="button" className={styles.button} onClick={handlePickImage}>Pick an Image</button>
      </div>
    </div>
  );
}
