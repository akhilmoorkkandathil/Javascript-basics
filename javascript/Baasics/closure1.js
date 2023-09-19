function x(){
    let z=10;
    function y(){
        console.log(z)
    }
    y()
    return y
}
const value = x()
value()



