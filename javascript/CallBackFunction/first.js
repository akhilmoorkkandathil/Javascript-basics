function doSomethingAsync(callback) {
    
      
      callback(); 
      console.log("Task is done!");
  }
  
  function callback() {
    
        console.log("Callback function executed!");
      
    
  }
  
  doSomethingAsync(callback);
  