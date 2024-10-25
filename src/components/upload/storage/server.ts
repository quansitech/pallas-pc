import Utils from "../utils";

export default {
    upload: async (file: File, action: string, hashId?: string) => {

        let server_url = action;

        const formData = new FormData();

        if(typeof hashId !== "undefined" && hashId !== ""){
            let preUrl = new URLSearchParams(action);
            preUrl.append("hash_id", hashId);
            preUrl.append('title', file.name);

            const res = await fetch(decodeURIComponent(preUrl.toString()));
            
            const resData = await res.json();
            if(resData.status){
                return resData;
            }
            if (Utils.handleError.hasError(resData)){
                return resData;
            }
            server_url = resData.server_url;
        }
        
        formData.append("file", file);
        
        const response = await fetch(server_url, {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        
        return data;

    }
}