(function() {
    var list = {
        games : [
            {
                title: "t1",
                genre: "g1",
                rank: "r1",
                publisher: "p1",
                information: "i1"
                
            }
            ]};
    
    var searchForm = document.getElementById("search-form");
    var searchField = document.getElementById("sInput");
    var getAll = document.getElementById("btnAllGames");
    var count = list.games.length;
    var target = document.getElementById("output");
    
    var gameListMethod = {
        search : function(event){
            
            var searchValue = searchField.value,
                i;
            
            event.preventDefault();
            
            target.innerHTML = "";
            
            if(count > 0 && searchValue !== ""){
                
                for(i = 0; i < count; i = i ++){
                    
                    var obj = list.games[i],
                     isItFound = obj.title.indexOf(searchValue);
                    
                    if (isItFound !== -1){
                        var gTitle = document.createElement("p");
                        var textTitle = document.createTextNode(obj.title);
                        gTitle.appendChild(textTitle);
                        target.appendChild(gTitle);
                        
                        
                        
//                        target.innerHTML += '<p>' + obj.title '<p>';
                        
                    }
                    
                }
                
            }
                        
            }
            
            
            
        }
                       console.log(textTitle);
                        console.log(gTitle);
                        console.log(target);
                         console.log(list);
                         console.log(searchForm);
//    
   
                                         
            
                 
}())