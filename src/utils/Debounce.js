export default function Debounce(fn,distance=100){
    let timer;
    return (...args) => { 
        clearTimeout(timer)
        timer=setTimeout(() => {
            fn(...args)
        }, distance);
     }
    
}