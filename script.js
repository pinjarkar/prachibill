let counter = document.querySelector('#counter');
let btns = document.querySelectorAll('.btn');
 let count = 0;
btns.forEach((btn) => {
   btn.addEventListener('click',(e) =>{
      const styles = e.currentTarget.classList
      if(styles.contains('increase')){
         count ++;
      }else if(styles.contains('decrease')){
         count --;
      }
      else{
         count = 0;
      }
      counter.textContent = count;

   })
})
const _default = series(scssTask, jsTask, browserSyncServer, watchTask);
export { _default as default };

export const build = series(scssTask,jsTask);
