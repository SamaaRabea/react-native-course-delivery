import { client } from "./clinent";

export async function getAllRepos(pageNumber=1){
try {
    const response=await client.get('/search/repositories',{
        params:{
            q:'created:>2021-01-01',
            sort:"stars",
            order:"desc",
            page:pageNumber,
        }
    });
    if(response){
        return response.data.items
    }else{
        return []
    }
    // console.log("RESPONSE",response)
} catch (error) {
    console.log("get repos err",error)
}
} 