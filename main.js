
let progressList = document.querySelectorAll('.rating-progress')

for(let n of progressList){
  let progress = n.querySelector(".progress")
  let proPercentage = n.querySelector(".progress-percentage")
  progress.style.width= proPercentage.textContent
}




