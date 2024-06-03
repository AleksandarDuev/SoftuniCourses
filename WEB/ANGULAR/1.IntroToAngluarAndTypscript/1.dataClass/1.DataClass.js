var DataClass = /** @class */ (function () {
    function DataClass(method, uri, version, message, response, fulfilled //?- показват се задължително, независимо, че не са подадени стойности
    ) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = false;
    }
    return DataClass;
}());
var myData = new DataClass('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
