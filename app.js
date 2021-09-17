const auth = "MFdCH7ZORiRbhucD5T1sleJYWrtGbKbg6J9BnBIV";

const imageCard = document.querySelector(".picture-card");
const moreBtn = document.querySelector(".more-btn");

moreBtn.addEventListener("click", fetchAPI);

async function fetchAPI() {
  const link = `https://api.nasa.gov/planetary/apod?api_key=${auth}&count=12`;
  const response = await fetch(link);
  const data = await response.json();
  console.log(data);
  addPicture(data);
}

function addPicture(data) {
  for (let i = 0; i < data.length; i++) {
    const Img = document.createElement("div");
    Img.classList.add("img-sec");
    Img.innerHTML = `<img src = ${data[i].hdurl}></img>
                <div class="img-info">
                <div class="img-head">
                <div class="img-title">${data[i].title}</div>
                <div class="img-date">${data[i].date}</div>
                </div>
                <div class="img-btns">
                <div class="heart" id ="hrt"></div>
                <div class="share"><a id="share-url" href=${data[i].url}>Share <i class="fas fa-location-arrow"></i></a></div>
                </div>
                <p class="img-desc">${data[i].explanation}</p>
                </div>`;
    imageCard.appendChild(Img);
  }
}

document.addEventListener("DOMContentLoaded", () => {
    const heart = document.getElementsByClassName("heart");
    console.log(heart);
    heart.forEach(btn => {
        btn.addEventListener("click", function() {
            this.classList.toggle("is-active");
          });
    });
});

fetchAPI();
