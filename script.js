let loadUser = () => {
  fetch('https://striveschool-api.herokuapp.com/books')
  .then(response => {
    return response.json()
  })
  .then(data => {
    let getBody = document.querySelector(".row");
    // console.log(data)
    let allInOne = data.forEach(element => getBody.innerHTML += `
      <div class="card col-12 col-md-4 col-lg-3 my-3 mx-3">
        <img src="${element.img}" class="card-img-top img-fluid w-100" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <div class="btns d-flex flex-row">
          <button type="button" class="btn btn-success">Add</button>
          <button type="button" class="mx-2 btn btn-info">Skip</button>
        </div>
        <div>
          $${element.price}
        </div>
        </div>
      </div>




    `)
    let getBtn1 = getBody.querySelectorAll(".btn-success")
    for(let i = 0; i < getBtn1.length; i++){
      const currentBtn1 = getBtn1[i]
      let newArr = []
      currentBtn1.onclick = function (event) {
        console.log(event.currentTarget);
        newArr.push(event.currentTarget.closest(".card").classList.add("bg-secondary"));
      };
    }
    let getBtn2 = getBody.querySelectorAll(".btn-info")
    for(let i = 0; i < getBtn2.length; i++){
      const currentBtn2 = getBtn2[i]
      currentBtn2.onclick = function (event) {
        event.currentTarget.closest(".card").remove();

      };
    }

  });
}
loadUser()
