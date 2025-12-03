const reelsdata = [
  {
    id: 1,
    username: "vishal",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    videoo: "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    caption: "Enjoying the sunset 🌅",
    likes: 123,
    comments: 45,
    shares: 8,
    isfriend: false,
    dislike: 20,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 2,
    username: "rahul",
    profile: "https://randomuser.me/api/portraits/men/22.jpg",
    videoo: "https://www.pexels.com/download/video/34994493/",
    caption: "Never stop exploring 🚀",
    likes: 90,
    comments: 14,
    shares: 3,
    isfriend: false,
    dislike: 5,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 3,
    username: "amit",
    profile: "https://www.pexels.com/download/video/27722420/",
    videoo: "https://www.pexels.com/download/video/35011631/",
    caption: "The best moment of my life 💙",
    likes: 520,
    comments: 80,
    shares: 18,
    isfriend: false,
    dislike: 2,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 4,
    username: "sneha",
    profile: "https://randomuser.me/api/portraits/women/19.jpg",
    videoo: "https://www.pexels.com/download/video/34484083/",
    caption: "Coffee + morning = perfect ☕",
    likes: 342,
    comments: 35,
    shares: 12,
    isfriend: false,
    dislike: 4,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 5,
    username: "arjun",
    profile: "https://randomuser.me/api/portraits/men/99.jpg",
    videoo: "https://www.pexels.com/download/video/34127854/",
    caption: "Just keep going 💪",
    likes: 112,
    comments: 22,
    shares: 4,
    isfriend: false,
    dislike: 1,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 6,
    username: "neha",
    profile: "https://randomuser.me/api/portraits/women/84.jpg",
    videoo: "https://www.pexels.com/download/video/11581111/",
    caption: "Love this view 😍",
    likes: 890,
    comments: 104,
    shares: 21,
    isfriend: false,
    dislike: 3,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 7,
    username: "sahil",
    profile: "https://randomuser.me/api/portraits/men/47.jpg",
    videoo: "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    caption: "Life is beautiful 🍃",
    likes: 67,
    comments: 7,
    shares: 1,
    isfriend: false,
    dislike: 12,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 8,
    username: "divya",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
    videoo: "https://www.pexels.com/download/video/13248829/",
    caption: "Chilling 🧊",
    likes: 350,
    comments: 60,
    shares: 14,
    isfriend: false,
    dislike: 6,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 9,
    username: "rohan",
    profile: "https://randomuser.me/api/portraits/men/18.jpg",
    videoo: "https://videos.pexels.com/video-files/3249935/3249935-uhd_2560_1440_25fps.mp4",
    caption: "Work hard. dream big 💥",
    likes: 120,
    comments: 18,
    shares: 7,
    isfriend: true,
    dislike: 8,
    isliked: false,
    isdisliked: false,
  },
  {
    id: 10,
    username: "sunny",
    profile: "https://randomuser.me/api/portraits/men/55.jpg",
    videoo: "https://www.pexels.com/download/video/20513140/",
    caption: "Weekend mood 😎",
    likes: 540,
    comments: 75,
    shares: 19,
    isfriend: false,
    dislike: 3,
    isliked: false,
    isdisliked: false,
  },
];


let Allreels = document.querySelector(".Allreels");



//  INITIAL RENDER
function adddata() {
  let html = "";
  reelsdata.forEach((e, id) => {
    html += `
    <section>
      <div class="reels" id="${id}">
        <video id="reel" src="${e.videoo}"  autoplay  loop muted playsinline></video>

        <div class="bottom">
          <div class="details">
            <img id="profile" src="${e.profile}">
            <h3>${e.username}</h3>
            <button class="friend" id="${id}">${e.isfriend ? "UnFollow" : "Follow"}</button>
          </div>
          <h4>${e.caption}</h4>
        </div>

        <div class="right">
          <div class="like" id="${id}">
            <i class="${e.isliked ? "ri-heart-fill" : "ri-heart-line"}"></i>
            <h4 id="likecount">${e.likes}</h4>
          </div>

          <div class="dislike" id="${id}">
            ${e.isdisliked ? '<i class="ri-thumb-down-fill"></i>' : '<i class="ri-thumb-down-line"></i>'}
            <h4>${e.dislike}</h4>
          </div>

          <div class="Comment">
            <i class="ri-chat-4-line"></i>
            <h4>${e.comments}</h4>
          </div>

          <div class="Share">
            <i class="ri-share-forward-fill"></i>
            <h4>${e.shares}</h4>
          </div>
        </div>
      </div>
    </section>`;
  });

  Allreels.innerHTML = html;
}

adddata();


//  UPDATE ONLY ONE REEL 
function updateSingleReel(id) {
  let reel = document.querySelector(`.reels[id="${id}"]`);
  console.log(reel);
  
  if (!reel) return;

  let likeBox = reel.querySelector(".like");
  let dislikeBox = reel.querySelector(".dislike");
  let friendBtn = reel.querySelector(".friend");

  // LIKE
  likeBox.querySelector("i").className =
    reelsdata[id].isliked ? "ri-heart-fill" : "ri-heart-line";
  likeBox.querySelector("#likecount").innerText = reelsdata[id].likes;

  // DISLIKE
  dislikeBox.querySelector("i").className =
    reelsdata[id].isdisliked ? "ri-thumb-down-fill" : "ri-thumb-down-line";
  dislikeBox.querySelector("h4").innerText = reelsdata[id].dislike;

  // FOLLOW
  friendBtn.innerText = reelsdata[id].isfriend ? "UnFollow" : "Follow";
}



//  HEART POPUP AT CLIENTX/Y
function showHeartAtClick(e) {
  let heart = document.createElement("div");
  heart.className = "dbl-heart";
  heart.innerHTML = `<i class="ri-heart-fill"></i>`;
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 700);
}



//  CLICK HANDLERS (NO RELOAD)
Allreels.addEventListener("click", (dets) => {

  // LIKE
  if (dets.target.closest(".like")) {
    let id = dets.target.closest(".like").id;

    if (!reelsdata[id].isliked) {
      reelsdata[id].likes++;
      reelsdata[id].isliked = true;

      if (reelsdata[id].isdisliked) {
        reelsdata[id].dislike--;
        reelsdata[id].isdisliked = false;
      }

    } else {
      reelsdata[id].likes--;
      reelsdata[id].isliked = false;
    }

    updateSingleReel(id);
  }


  // FOLLOW
  if (dets.target.className === "friend") {
    let id = dets.target.id;
    reelsdata[id].isfriend = !reelsdata[id].isfriend;
    updateSingleReel(id);
  }


  // DISLIKE
  if (dets.target.closest(".dislike")) {
    let id = dets.target.closest(".dislike").id;

    if (!reelsdata[id].isdisliked) {
      reelsdata[id].dislike++;
      reelsdata[id].isdisliked = true;

      if (reelsdata[id].isliked) {
        reelsdata[id].likes--;
        reelsdata[id].isliked = false;
      }

    } else {
      reelsdata[id].dislike--;
      reelsdata[id].isdisliked = false;
    }

    updateSingleReel(id);
  }
});




// DOUBLE TAP LIKE (NO RELOAD)
Allreels.addEventListener("dblclick", (e) => {
  let reel = e.target.closest(".reels");
  if (!reel) return;

  let id = reel.id;

  if (!reelsdata[id].isliked) {
    reelsdata[id].likes++;
    reelsdata[id].isliked = true;
  }

  if (reelsdata[id].isdisliked) {
    reelsdata[id].dislike--;
    reelsdata[id].isdisliked = false;
  }

  updateSingleReel(id);
  showHeartAtClick(e);
});
