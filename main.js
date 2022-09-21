/*
순수 자바스크립트(vanila script)를 이용하여
menu를 클릭하면 그에 맞는 내용이 보이도록(display block) script를 작성하시오.
페이지가 열리자마자는 menu1과 그에 맞는 내용이 나타나도록 작성하시오.
*/

//문자열에서 특정 문자를 빼는 것 key point

let targetLink = document.querySelectorAll('.tab-menu a');
let tabContent = document.querySelectorAll('#tab-content > div');

for(let i = 0; i < targetLink.length; i++){ 
  targetLink[i].addEventListener('click', (ev)=>{
    // console.log(ev);
    ev.preventDefault(); 
    let orgTarget = ev.target.getAttribute('href'); // 클릭한 것의 링크 값을 반환
    //console.log(orgTarget);
  
    let tabTarget = orgTarget.replace('#', ''); // 링크값에서 #만 제거
    
    for(let j=0; j<tabContent.length; j++){ // 원하는 걸 띄우기 이전에 다른 div 모두 안보이게하기
      tabContent[j].style.display = 'none';
    }
    
    document.getElementById(tabTarget).style.display = 'block' // 그리고 원하는 div만 띄우기

    for(let x = 0; x < targetLink.length; x++){ // 몇번째 버튼의 내용인지. 버튼색깔 바꿔주기
      targetLink[x].classList.remove('active');
      ev.target.classList.add('active');
    }
  })
}

document.getElementById('tabs-1').style.display = 'block'; // 처음 시작할떄는 무조건 menu1열려있게.

