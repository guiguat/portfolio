import colors from "./colors.js";
$(document).ready(function () {  
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/guiguat/repos",
        dataType: "JSON",
        success: function (response) {
            $("#loading").hide();
            let i = 0;
            response.forEach(repo => {
                let contentHomepage = `
                <div class="col-sm-4 mb-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name.toUpperCase()}</h5>
                            <div class="row-lang">
                                <div class=" circle" style='background-color:${getColor(repo.language)}'>
                                </div>                                
                                <span class="language"> ${repo.language}</span>                                
                            </div>                         
                            <p class="card-text">
                            ${repo.description}
                            </p>
                            <a href="${repo.html_url}" target="_blank" class="card-link">Github</a>
                            <a href="${repo.homepage}" target="_blank" class="card-link">Website</a>
                        </div>
                    </div>
                </div>
                `
                let content = `
                <div class="col-sm-4 mb-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name.toUpperCase()}</h5>
                            <div class="row-lang">
                                <div class=" circle" style='background-color:${getColor(repo.language)}'>
                                </div>                                
                                <span class="language"> ${repo.language}</span>                                
                            </div>
                            <p class="card-left">
                            ${repo.description}
                            </p>
                            <a href="${repo.html_url}" target="_blank" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                `
                $("#repos").prepend((repo.homepage !== "" && repo.homepage !== null)?contentHomepage:content);
            });
        }
    });
 });
 
 function getColor(language){
     let color="";
     let array = Object.keys(colors);
     array.forEach(key =>{
         if(language === key){
             color = colors[key].color;
         }
     })
     return color;
 }
 
