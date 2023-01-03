import { collection, getDocs, addDoc } from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import userServices from "../services/user.services";
import Papa from "papaparse";
import { db } from "../firebase";
import CreateUser from "./createUser";
import "./font.css";
/* Transformacion de documentos */
const userCollectionRef = collection(db, "prueba");
function convertCSVToJSON(csv) {
  return new Promise((resolve, reject) => {
    Papa.parse(csv, {
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        resolve(results.data);
      },
      error: function (error) {
        reject(error);
      },
    });
  });
}
/* usar la trasformacion y subida a firebase */
async function handleFileSelect(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = async function (e) {
    console.log("Contenido del archivo:", e.target.result);
    try {
      const csv = e.target.result;
      const json = await convertCSVToJSON(csv);
      /* Iteraciones para subir */
      json.forEach(async (doc) => {
        await userServices.addBase(doc);
      });
      NotificationManager.success("Archivo subido con éxito", "Éxito");
    } catch (error) {
      console.error("Error al leer el archivo:", error);
      NotificationManager.error("Error al subir el archivo", "Error");
    }
  };
  reader.readAsText(file);
}

const UploadDatos = () => {
  return (
    <>
      <CreateUser />
      <div className='overlay-container'>
        <div className='overlay'>
          <div className='overlay-panel overlay-right'>
            <h1>Subir Archivos</h1>
            <div className='file-upload'>
              <div className='file-select'>
                <div className='file-select-button' id='fileName'>
                  Elegir Archivo
                </div>
                <input type='file' onChange={handleFileSelect} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UploadDatos;
