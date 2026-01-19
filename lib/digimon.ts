// lib/digimon.ts

import { DigimonCardData } from "@/types/digimonCard";

const API_URL = "https://digimoncard.io/api-public/search.php";

export async function getCardById(cardId: string): Promise<DigimonCardData | null> {
  try {
    // La API de digimoncard.io usa el parámetro 'n' para el card number
    const response = await fetch(`${API_URL}?n=${cardId}`);

    if (!response.ok) throw new Error("Error al consultar la API");
    
    const data = await response.json();

    // La API devuelve un array, tomamos el primer resultado
    if (data && data.length > 0) {
      const card = data[0];
      return {
        cardnumber: card.cardnumber,
        name: card.name,
        image_url: card.image_url,
        type: card.type,
        color: card.color,
        level: card.level
      };
    }
    return null;
  } catch (error) {
    console.error(`Error cargando carta ${cardId}:`, error);
    return null;
  }
}