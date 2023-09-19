const varification = (username,password) => {
    if(username=="Admin"){
        return true;
    }else if(username =="Monkey" && password=="lol"){
        return true;
    }else if(username =="Momo" && password=="hello"){
        return true;
    }else{
        return false;
    }
}

const value=varification("Momo","hello");
console.log(value);
