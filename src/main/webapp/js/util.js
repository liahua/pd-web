function HashMap() {
    var myArray = new Array();
    this.put = function (key, value) {
        myArray[key] = value;
    }
    this.get = function (key) {
        return myArray[key];
    }
}


function getParamMap() {
    var search = location.search;
    console.log(search);
    var map = new HashMap();
    if(search.indexOf("?")>=0){
        search=search.substr(1);
        var nameValues = search.split("&");
        for(var i=0;i<nameValues.length;i++){
            var array = nameValues[i].split("=");
            map.put(array[0],array[1]);
        }

    }
    return map;
}