let ENDPOINT = import.meta.env.VITE_BACKEND_URL
if(process.env.NODE_ENV==="production"){
    ENDPOINT= import.meta.env.RENDER_BACKEND_URL
}

export default ENDPOINT;