const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");

menuBtn?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded",String(open));
});

document.querySelectorAll(".nav-links a").forEach(a=>{
  a.addEventListener("click",()=>nav.classList.remove("open"));
});

document.querySelectorAll("[data-link]").forEach(el=>{
  const key=el.dataset.link;
  if(SITE_CONFIG.links[key]) el.href=SITE_CONFIG.links[key];
});

document.querySelectorAll(".faq button").forEach(button=>{
  button.addEventListener("click",()=>{
    const item=button.closest(".faq");
    const open=item.classList.contains("open");
    document.querySelectorAll(".faq").forEach(x=>x.classList.remove("open"));
    if(!open)item.classList.add("open");
  });
});
