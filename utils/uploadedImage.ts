import { ID, storage } from '@/appwrite';

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    '64ef293c039aaa89604b',
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
