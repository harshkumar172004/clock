let Hour = document.querySelector(".Hour");
let Min = document.querySelector(".Min");
let Sec = document.querySelector(".Sec");
setInterval(() => {
   let d = new Date();
   let htime = d.getHours();
   let mtime = d.getMinutes();
   let stime = d.getSeconds();
   let hrotation = 30 * htime + mtime / 2;
   let mrotation = 6 * mtime;
   let srotation = 6 * stime;

    Hour.style.transform = `rotate(${hrotation}deg)`;
    Min.style.transform = `rotate(${mrotation}deg)`;
    Sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);