let preTag = document.querySelectorAll("pre");
async function copyCode(e) {
    const t = e.srcElement;
    t.innerText = "Copyed";
    let o = t.parentElement.querySelector("code").innerText;
    await navigator.clipboard.writeText(o), t.classList.add("copyed"), setTimeout((() => {
        t.classList.remove("copyed"), t.innerText = "Copy"
    }), 1e3)
}
preTag.forEach((e => {
    if (navigator.clipboard) {
        let t = document.createElement("button");
        t.classList.add("preCopy"), t.innerText = "Copy", t.addEventListener("click", copyCode), e.appendChild(t) 
    }
})); 