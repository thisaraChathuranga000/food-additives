import { InsData } from "@/interfaces/InsData";
import {
  ref,
  child,
  get,
  getDatabase,
  query,
  orderByChild,
  equalTo,
  update,
  push,
  set,
} from "firebase/database";
import { app } from "@/firebase/firebase-config";

const dbRef = ref(getDatabase(app));

export async function getAll(): Promise<InsData[]> {
  try {
    const snapshot = await get(child(dbRef, `data`));
    if (snapshot.exists()) {
      const data: InsData[] = snapshot.val();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export async function getByInsNumber(
  insNumber: string
): Promise<InsData | null> {
  try {
    const snapshot = await get(
      query(
        child(dbRef, "data"),
        orderByChild("ins_number"),
        equalTo(insNumber)
      )
    );

    if (snapshot.exists()) {
      const data: InsData = snapshot.val();
      const dataArray = Object.values(data);
      return dataArray[0] || null;
    } else {
      console.log("No data found for ins_number:", insNumber);
      return null;
    }
  } catch (error) {
    console.error("Error fetching data by ins_number:", error);
    return null;
  }
}

export async function insertData(data: InsData): Promise<string | null> {
  try {
    const newRef = push(child(dbRef, `data`));
    await set(newRef, data);
    console.log("Data inserted successfully with key:", newRef.key);
    return newRef.key;
  } catch (error) {
    console.error("Error inserting data:", error);
    return null;
  }
}

export async function updateData(
  key: string,
  updatedData: Partial<InsData>
): Promise<boolean> {
  try {
    const recordRef = child(dbRef, `data/${key}`);
    await update(recordRef, updatedData);
    console.log("Data updated successfully for key:", key);
    return true;
  } catch (error) {
    console.error("Error updating data for key:", key, error);
    return false;
  }
}
