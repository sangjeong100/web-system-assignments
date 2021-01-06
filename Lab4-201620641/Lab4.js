document.querySelector("#append_btn").addEventListener("click",function(){

    var text = document.getElementById("input_text");
    
    if(text.value === "") return;

    var memoList = document.querySelector("#memoList");
    let newArticle = document.createElement("article");
    
    newArticle.innerHTML = text.value;
    newArticle.classList.add("memo");
    memoList.appendChild(newArticle);
    
    document.querySelector("#input_text").value = "";

    var count = document.querySelector("#memo_count");
    document.querySelector("#memo_count").innerHTML = parseInt(count.innerText) + 1;
}); 