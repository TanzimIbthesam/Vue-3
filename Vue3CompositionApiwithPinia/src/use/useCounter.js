import {  nextTick,onMounted, ref,watch,computed,reactive } from 'vue';
export function useCounter(){
    
    const counterData=reactive({
        counter:0
  });
  const increaseCounter=async(amount)=>{
   // counter.value+=amount
   counterData.counter+=amount;
   await nextTick();
   console.log("Hello this is mounted to DOM");
   //If not async function 
   
 }
 
 const oddorEven=computed(()=>{
  if(counterData.counter%2===0) return "Even";
 
  return "Odd";
 });

 watch(()=>counterData.counter,(newCount,oldCount)=>{
     console.log(oldCount);
     if(newCount===20){
         alert("Your new count is 20")
     }
 })
 onMounted(()=>{
    console.log("It is mounted");
})
return {
    counterData,
    oddorEven,
    increaseCounter
}
}