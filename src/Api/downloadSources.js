import { basePath } from "./config";

export function getSourcesApi(){
    const url = `${basePath}/source`;
    const params ={
        method:"GET"
    }

    return fetch(url,params).then(response=>{
        return response.blob()
    }).then(blob=>{
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        // 4. Force download
        link.click();
        // 5. Clean up and remove the link
        link.parentNode.removeChild(link);
    })
}