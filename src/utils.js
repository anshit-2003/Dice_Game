export function DieRoll(){
    return Math.floor(Math.random() * 6)+1
}


// Get n rolls => [num,...]
export function getrolls(nums){
    return Array.from({length : nums},()=>DieRoll());
}

export function sum(arr){
    return arr.reduce((prev,curr)=>prev+curr,0);
}