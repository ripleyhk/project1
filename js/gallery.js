const imgs = document.getElementsByClassName('gallery-img');
const viewer = document.getElementById('viewer-img');
const caption = document.getElementById('viewer-caption').getElementsByTagName('p')[0];
const buttons = document.getElementsByTagName('button')
let index = 0; 
for (let i = 0; i < imgs.length; i++) {
   imgs[i].addEventListener('click', () => {
      updateViewer(i);
      updateIndex();
   })
}

buttons[0].addEventListener('click', () => {
   if (index == 0) {
      index = imgs.length - 1;
   } else {
      index--;
   }
   updateViewer(index);
})

buttons[1].addEventListener('click', () => {
   if (index == (imgs.length - 1)) {
      index = 0;
   } else {
      index++;
   }
   updateViewer(index);
})

document.addEventListener('keydown', (event) => {
   const key = event.key;
   switch (key) {
      case "ArrowLeft":
         if (index == 0) {
            index = imgs.length - 1;
         } else {
            index--;
         }
      break; 
      case "ArrowRight":
         if (index == (imgs.length - 1)) {
            index = 0;
         } else {
            index++;
         }
      break;
   }
   updateViewer(index);
})

function updateViewer(i) {
   viewer.setAttribute('alt', imgs[i].getAttribute('alt'));
   viewer.setAttribute('src', imgs[i].getAttribute('src'));
   caption.innerHTML = viewer.getAttribute('alt');
}

function updateIndex() {
   for (let i = 0; i < imgs.length; i++) {
      if ((viewer.getAttribute('alt')) === (imgs[i].getAttribute('alt'))) {
         index = i;
         break; 
      }
   }
}