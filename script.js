window.onload = () => {
  let getRow = document.querySelector(.row)
  let getBtn1 = getRow.querySelectorAll(".btns:nth-child(1)")
  for(let i = 0; i < getBtn1.length; i++){
    const currentBtn = getBtn1[i]
    currentBtn.innerText = "Hide";
  }

}
