(function() {
    var list = {
        games : [
            {
                title: "Binding of Isaac",
                genre: "Rogue-Like",
                rank: "1",
                publisher: "Edmund McMillen",
                information: "http://store.steampowered.com/app/113200/"
                
            },
            {
                 title: "Axiom Verge",
                genre: "Metroidvania",
                rank: "2",
                publisher: "Thomas Happ Games LLC",
                information: "http://store.steampowered.com/app/332200/"
                
            },
               {
                 title: "Shovel Knight",
                genre: "Platformer",
                rank: "3",
                publisher: "Yacht Club Games",
                information: "http://store.steampowered.com/app/250760/"
                
            },
                    {
                 title: "Hitogeta Happa",
                genre: "Shoot-Em-Up",
                rank: "4",
                publisher: "Rockin Android	",
                information: "http://store.steampowered.com/app/92210/"
                
            },
                    {
                 title: "Jamestown",
                genre: "Shoot-Em-Up",
                rank: "5",
                publisher: "Final Form Games",
                information: "http://store.steampowered.com/app/94200/"
              
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
                
                for(i = 0; i < count; i ++){
                    
                    var obj = list.games[i],
                     isItFound = obj.title.indexOf(searchValue);
                    
                    if (isItFound !== -1){
                     
//                        target.innerHTML += '<p>' + obj.name + '<p>';
                        target = document.getElementById("output");
                        var gTitle = document.createElement("p");
                        var iLink = obj.information.link(obj.information);
                        var testLink = document.getElementById("output").innerHTML = iLink;
                        var textTitle = document.createTextNode(obj.rank + " " + obj.title + "   " + obj.genre + ("   ") + obj.publisher + testLink);
                        gTitle.appendChild(textTitle);
                        target.appendChild(gTitle);
//                    
//                        
                        console.log(textTitle);
                        console.log(gTitle);
                        
                        
//                        target.innerHTML += '<p>' + obj.title '<p>';
                         
                    }
                  
                    
                }
                 
                
            } 
            
                      
            },
        getAllTitles : function(){
            target.innerHTML = "";
            var i;
            
            if (count > 0){
                
                for(i = 0; i < count; i ++){
                    
                    var obj = list.games[i];
                    
                      target = document.getElementById("output");
                        var gTitle = document.createElement("p");
                        
                    var iLink = obj.information.link(obj.information);
                        var testLink = document.getElementById("output").innerHTML = iLink;
                        var textTitle = document.createTextNode(obj.rank + " " + obj.title + "   " + obj.genre + ("   ") + obj.publisher );
                        
                        gTitle.appendChild(textTitle); 
                        target.appendChild(gTitle);
//                    
                }
            }
        
        },
        setActiveSection : function(){
            
            this.parentNode.setAttribute("class", "active");
        },
        removeActiveSection : function(){
            
            this.parentNode.removeAttribute("class");
        }
            
                
        }
        getAll.addEventListener("click", gameListMethod.getAllTitles, false);
    
        searchForm.addEventListener("submit", gameListMethod.search, false);
    
        searchField.addEventListener("keyup", gameListMethod.search, false); 
    
                      
                        console.log(target);
                         console.log(list); 
                         console.log(searchForm);
// get all contacts when you click the button

                 
}())
