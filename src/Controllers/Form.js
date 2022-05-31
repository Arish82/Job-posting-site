const base="http://localhost:8001";

export const posting=async(obj)=>{
    const res=await fetch(`${base}/v1jobs/job`,
    {
        method: 'Post',
        body: JSON.stringify,
        headers: {
            "Content-Type": "application/json"
        }
    }
    );

    const ans= await res.json();
    return ans;
}