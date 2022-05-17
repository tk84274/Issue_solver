const renderIssues = async()=>{
    let uri = "http://localhost:3000/Issues";
    const res = await fetch(uri);
    const issues = await res.json;
    console.log(issues);
}
window.addEventListener('DOMContentLoaded', ()=> renderIssues());
