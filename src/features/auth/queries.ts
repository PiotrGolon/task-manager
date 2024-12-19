import { createSessionClient } from "@/lib/appwrite";
//this is not server action, this is database query
export const getCurrent = async () => {
  try {
    const { account } = await createSessionClient();

    return await account.get();
  } catch {
    return null;
  }
};
