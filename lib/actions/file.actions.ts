'use server'
import { UploadFileProps } from "@/types"

export const uploadFile = async ({file, ownerId, accountId, path}:UploadFileProps)=>{
    const {storage, databases} =  await createAdminClient();

    try{

        const inputFile = InputFile.fromBuffer(file, file.name);
        const bucketFile = 



    } catch(Error){
        handleError(error, message: "Failed to upload file")
    }

}