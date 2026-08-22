const items = [1,2,3,"4","5",6,7,"Ivan","Rosa"];
const enumerate = Map.groupBy(items,  items =>  typeof items === "string" ? "string":"number"); 
console.log(enumerate);




