class DataClass {
   constructor(
   public method: String,
   public uri: String,
   public version: String,
   public message: String,
   public response?: String,
   public fulfilled?: boolean           //?- показват се задължително, независимо, че не са подадени стойности
    
  ) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = response;
    this.fulfilled = false;
  }
  
}

let myData = new DataClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);

