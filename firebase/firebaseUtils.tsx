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
): Promise<(InsData & { key: string }) | null> {
  try {
    const snapshot = await get(
      query(
        child(dbRef, "data"),
        orderByChild("ins_number"),
        equalTo(insNumber)
      )
    );

    if (snapshot.exists()) {
      // Extract data and include the key
      const rawData = snapshot.val();
      const entries = Object.entries(rawData); // Convert to an array of [key, value]
      if (entries.length > 0) {
        const [key, value] = entries[0]; // Take the first matching result
        return { key, ...(value as InsData) }; // Return key with data
      }
    }

    console.log("No data found for ins_number:", insNumber);
    return null;
  } catch (error) {
    console.error("Error fetching data by ins_number:", error);
    return null;
  }
}


export async function insertData(data: InsData): Promise<string | null> {
  try {
    const snapshot = await get(child(dbRef, 'data'));
    let newKey = 1;

    if (snapshot.exists()) {
      const existingData = snapshot.val();
      const keys = Object.keys(existingData);
      if (keys.length > 0) {
        const highestKey = Math.max(...keys.map(key => parseInt(key, 10)));
        newKey = highestKey + 1;
      }
    }

    const newRef = child(dbRef, `data/${newKey.toString()}`);
    await set(newRef, data);
    console.log("Data inserted successfully with key:", newKey);
    return newKey.toString();
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

export async function updateDataByInsNumber(
  ins_number: string,
  updatedData: Partial<InsData>
): Promise<boolean> {
  try {
    // Fetch all records to find the one with the matching ins_number
    const snapshot = await get(dbRef); // Assuming `dbRef` is the reference to your "data" node
    if (!snapshot.exists()) {
      console.error("No data found in the database.");
      return false;
    }

    // Search for the record with the given ins_number
    let keyToUpdate: string | null = null;
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      if (childData?.ins_number === ins_number) {
        keyToUpdate = childSnapshot.key; // Get the key of the matching record
      }
    });

    if (!keyToUpdate) {
      console.error(`No record found with ins_number: ${ins_number}`);
      return false;
    }

    // Update the record using the key
    const recordRef = child(dbRef, `data/${keyToUpdate}`);
    await update(recordRef, updatedData);
    console.log(`Data updated successfully for ins_number: ${ins_number}`);
    return true;
  } catch (error) {
    console.error(`Error updating data for ins_number: ${ins_number}`, error);
    return false;
  }
}

export async function deleteByInsNumber(insNumber: string): Promise<boolean> {
  try {
    const snapshot = await get(child(dbRef, "data"));
    if (!snapshot.exists()) {
      console.error("No data found in the database.");
      return false;
    }

    let keyToDelete: string | null = null;
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      if (childData?.ins_number === insNumber) {
        keyToDelete = childSnapshot.key;
      }
    });

    if (!keyToDelete) {
      console.error(`No record found with ins_number: ${insNumber}`);
      return false;
    }

    const recordRef = child(dbRef, `data/${keyToDelete}`);
    await set(recordRef, null);
    console.log(`Data deleted successfully for ins_number: ${insNumber}`);
    return true;
  } catch (error) {
    console.error(`Error deleting data for ins_number: ${insNumber}`, error);
    return false;
  }
}
