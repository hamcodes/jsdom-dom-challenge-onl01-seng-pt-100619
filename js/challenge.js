document.addEventListener("DOMContentLoaded", function(){
  const myTimer = document.getElementById("counter");
  let timerValue = 0;
  let counterTimer = window.setInterval(numberIncrementor, 1000);
  const minusBtn = document.getElementById("minus");
  const pauseBtn = document.getElementById("pause");
  const plusBtn = document.getElementById("plus");
  const likeList = document.querySelector("ul.likes");
  const heartBtn = document.getElementById("heart");
  const commentBtn = document.getElementById("submit");
  function numberIncrementor() {
      myTimer.innerText = timerValue;
      timerValue++;
  }

  pauseBtn.addEventListener("click", () => {
      if(pauseBtn.className === "running"){
          window.clearInterval(counterTimer);
          pauseBtn.className = "paused";
          pauseBtn.innerText = "resume";
          minusBtn.disabled = true;
          plusBtn.disabled = true;
          heartBtn.disabled= true;
          commentBtn.disabled= true;

      }
      else {
          counterTimer = window.setInterval(numberIncrementor, 1000);
          pauseBtn.className = "running";
          pauseBtn.innerText = "pause";
          minusBtn.disabled = false;
          plusBtn.disabled = false;
          heartBtn.disabled= false;
          commentBtn.disabled= false;
      }

  });

  minusBtn.addEventListener("click", () => {
      timerValue -= 1;
      myTimer.innerText = timerValue;
  });

  plusBtn.addEventListener("click", () => {
      timerValue += 1;
      myTimer.innerText = timerValue;
  });

  heartBtn.addEventListener("click", (e) => {
      let likeListItem = document.createElement("li");
      let favNum = myTimer.innerText + " has been liked 1 time";
      likeListItem.innerText = favNum;
      likeList.appendChild(likeListItem);
      console.log(e);
  });

  commentBtn.addEventListener("click", (e) =>{
      e.preventDefault();
      let newComment = document.createElement("p");
      newComment.innerText = document.getElementById("comment-input").value;
      document.getElementById("list").appendChild(newComment);
  });

});