$(document).ready(function () {
   $.ajax({
       type: "GET",
       url: "https://api.github.com/users/guiguat/repos",
       dataType: "JSON",
       success: function (response) {
            $("#loading").hide();
            response.forEach(repo => {
                let contentHomepage = `
                <div class="col-sm-4 mb-5">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${repo.name.toUpperCase()}</h5>
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
                            <p class="card-text">
                            ${repo.description}
                            </p>
                            <a href="${repo.html_url}" target="_blank" class="card-link">Github</a>
                        </div>
                    </div>
                </div>
                `
                $("#repos").prepend((repo.homepage !== "")?contentHomepage:content);
            });
       }
   });
});