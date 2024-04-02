const collapsibleItemHeaders = document.querySelectorAll(".collapsible-item-header");

collapsibleItemHeaders.forEach(collapsibleItemHeader => {
    collapsibleItemHeader.addEventListener("click", event => {
        collapsibleItemHeader.classList.toggle("active");
        const collapsibleItemBody = collapsibleItemHeader.nextElementSibling;
        if(collapsibleItemHeader.classList.contains("active")){
            collapsibleItemBody.style.maxHeight = collapsibleItemBody.scrollHeight + "px";
        }
        else{
            collapsibleItemBody.style.maxHeight = 0;
        }
    });
});
