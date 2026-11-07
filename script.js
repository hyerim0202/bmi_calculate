function calculateBMI(){

  let h; //키
  let w; //몸무게

  h = Number(document.querySelector("#height").value);
  w = Number(document.querySelector("#weight").value);

  h = h/100; //cm -> m, 170 -> 1.7

  let bmi;
  bmi = w/(h*h);
  
  

  document.querySelector("#result").textContent = "BMI: " + bmi.toFixed(2);

  if(bmi >= 25){
    document.querySelector("#state").textContent = "비만";
  } else if(bmi >= 23){
    document.querySelector("#state").textContent = "과체중";
  } else if(bmi >= 18.5){
    document.querySelector("#state").textContent = "정상";
  } else{document.querySelector("#state").textContent = "저체중";}

  updateBar(bmi);
}

function updateBar(bmi){
  const marker = document.querySelector("#marker");

  if(!isFinite(bmi) || bmi <= 0){
    marker.classList.remove("show");
    return;
  }

  // 15 ~ 35 사이를 바 전체 너비로 매핑 (0% = 15, 100% = 35)
  let pos = ((bmi - 15) / 20) * 100;
  if(pos < 0) pos = 0;
  if(pos > 100) pos = 100;

  marker.style.left = pos + "%";
  marker.textContent = "😊";
  marker.classList.add("show");
}
