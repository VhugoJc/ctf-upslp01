import { basePath } from "./config";

export function getSourcesApi(){
    const url = `${basePath}/weird`;
    const params ={
        method:"GET"
    }

    return fetch(url,params).then(response=>{
        return response.blob()
    }).then(blob=>{
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
            'download',
            `weird.js`,
          );
          // 4. Force download
          link.click();
         })
}