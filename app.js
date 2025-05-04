//varibles 
const gotogithub = document.getElementById('gotolink');
const linkedin = document.getElementById('linkedin');
const youtube = document.getElementById('youtube');
//events
gotogithub.addEventListener('click',function(){
    openInNewTab('https://github.com/mohammedbourass-youssef');
});
linkedin.addEventListener('click',function(){
    openInNewTab('https://www.linkedin.com/in/mohammed-bourass-39538a293/');
});
youtube.addEventListener('click',function(){
   openInNewTab('https://www.youtube.com/@mohammedbourassprojects');
});
//functions
function openInNewTab(url) {
    try {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (newWindow) {
        newWindow.opener = null; // Security measure to prevent tabnabbing
      }
      return newWindow;
    } catch (e) {
      console.error('Failed to open new tab:', e);
      return null;
    }
  }
  

//main