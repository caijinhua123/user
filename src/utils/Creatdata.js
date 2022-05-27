
export default function Creatdata(timestamp,isMS=false){
   const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date
    .getDate()
    .toString()
    .padStart(2, "0");
    if(isMS){
      const houer =date.getHours().toString().padStart(2, "0")
      const min =date.getMinutes().toString().padStart(2, "0")
      const sc =date.getSeconds().toString().padStart(2, "0")
      return `${date.getFullYear()}-${month}-${day} ${houer}:${min}:${sc}`;
    }
  return `${date.getFullYear()}-${month}-${day}`;
}