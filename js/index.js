const container = document.querySelector(".IssuesArray");
const renderIssues = async()=>{
    let uri = "http://localhost:3000/Issues";
    const res = await fetch(uri);
    const issues = await res.json();
   
    let template = '';
    issues.forEach(element => {
        template+= `
        <div class = "issues">
        <div class="col-md-4">
        <div class="card h-100">
          <img src="images/issue_background_image.jpg" class="card-img-top" alt="issue_image">
          <div class="card-body">
            <h5 class="card-title">${element.description}</h5>
            <p class="card-text">${element.description}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><button onclick=""><img src="images/like.png" alt=""> ${element.likes} &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </button></small>
            <span></span>
            <small class="text-muted issue_detail_button"><button onclick="">View Details</button></small>
          </div>
        </div>
      </div>
        </div>
        `

    });

    container.innerHTML = template;

}
window.addEventListener('DOMContentLoaded', ()=> renderIssues());
