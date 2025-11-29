const reelsdata = [
  {
    id: 1,
    username: "vishal",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    caption: "Enjoying the sunset 🌅",
    likes: 123,
    comments: 45,
    shares: 8,
    isfriend: false,
    dislike: 20
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 2,
    username: "rahul",
    profile: "https://randomuser.me/api/portraits/men/22.jpg",
    image: "https://images.unsplash.com/photo-1495954484750-af469f2f9be5",
    caption: "Never stop exploring 🚀",
    likes: 90,
    comments: 14,
    shares: 3,
    isfriend: false,
    dislike: 5
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 3,
    username: "amit",
    profile: "https://randomuser.me/api/portraits/men/46.jpg",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    caption: "The best moment of my life 💙",
    likes: 520,
    comments: 80,
    shares: 18,
    isfriend: false,
    dislike: 2
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 4,
    username: "sneha",
    profile: "https://randomuser.me/api/portraits/women/19.jpg",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    caption: "Coffee + morning = perfect ☕",
    likes: 342,
    comments: 35,
    shares: 12,
    isfriend: false,
    dislike: 4
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 5,
    username: "arjun",
    profile: "https://randomuser.me/api/portraits/men/99.jpg",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    caption: "Just keep going 💪",
    likes: 112,
    comments: 22,
    shares: 4,
    isfriend: false,
    dislike: 1
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 6,
    username: "neha",
    profile: "https://randomuser.me/api/portraits/women/84.jpg",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    caption: "Love this view 😍",
    likes: 890,
    comments: 104,
    shares: 21,
    isfriend: false,
    dislike: 3
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 7,
    username: "sahil",
    profile: "https://randomuser.me/api/portraits/men/47.jpg",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    caption: "Life is beautiful 🍃",
    likes: 67,
    comments: 7,
    shares: 1,
    isfriend: false,
    dislike: 12
    ,
    isliked: false,isdisliked: false,
  },
  {
    id: 8,
    username: "divya",
    profile: "https://randomuser.me/api/portraits/women/65.jpg",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19",
    caption: "Chilling 🧊",
    likes: 350,
    comments: 60,
    shares: 14,
    isfriend: false,
    dislike: 6
    ,
    isdisliked: false,
    isliked: false,
  },
  {
    id: 9,
    username: "rohan",
    profile: "https://randomuser.me/api/portraits/men/18.jpg",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
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
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413",
    caption: "Weekend mood 😎",
    likes: 540,
    comments: 75,
    shares: 19,
    isliked: false,
    isfriend: false,
    dislike: 3
    ,
    isdisliked: false,
  }
];

let Allreels = document.querySelector(".Allreels")

let adddata = () => {
  let sum = ''
  reelsdata.forEach((e, id) => {
    sum += `
      <section>
        <div class="reels">
          <img id="reel" src=${e.image}>
          <div class="bottom">
            <div class="details">
              <img id="profile" src=${e.profile} alt="">
              <h3>${e.username}</h3>
              <button class="friend" id=${id}>${e.isfriend ? "UnFollow" : "Follow"}</button>
            </div>
            <h4>${e.caption}</h4>
          </div>
          <div class="right">
            <div class="like" id=${id}>
   <i class="${e.isliked ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
<h4 id="likecount">${e.likes}</h4>

            </div>  
            <div id=${id} class="dislike">
${e.isdisliked 
   ? '<i class="ri-thumb-down-fill"></i>' 
   : '<i class="ri-thumb-down-line"></i>'
}
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
      </section>
    `;
  });

  Allreels.innerHTML = sum;
}
adddata()


Allreels.addEventListener("click", (dets) => {
  const clickedElement = dets.target;



  if (dets.target.className == "like") {


    if (!reelsdata[dets.target.id].isliked) {


      reelsdata[dets.target.id].likes++
      reelsdata[dets.target.id].isliked = true


    } else {
      reelsdata[dets.target.id].likes--
      reelsdata[dets.target.id].isliked = false
    }
    adddata()


  }

  if (dets.target.className == "friend") {
    console.log(dets.target.id);

    if (!reelsdata[dets.target.id].isfriend) {
      reelsdata[dets.target.id].isfriend = true


    } else {
      reelsdata[dets.target.id].isfriend = false

    }
    adddata()

  }
  if (dets.target.className == "dislike") {
    console.log(dets.target.id);

    if (!reelsdata[dets.target.id].isdisliked) {
      reelsdata[dets.target.id].dislike--

      reelsdata[dets.target.id].isdisliked = true


    } else {
      reelsdata[dets.target.id].dislike++
            


      reelsdata[dets.target.id].isdisliked = false

    }
    adddata()

  }










})