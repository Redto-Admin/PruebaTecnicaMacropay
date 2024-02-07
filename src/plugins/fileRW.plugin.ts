import * as fs from "fs";

export const readFilePlugin = (filePath: string) => {
  try {
    // Leer el contenido del archivo como JSON de forma sincrónica
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error: any) {
    throw new Error(`Error al leer el archivo JSON: ${error.message}`);
  }
};

