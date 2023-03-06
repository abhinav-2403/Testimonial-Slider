const testimonials= [
    {
        name: "Ximenez X",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        text: "I'd be lost without apple. I am really satisfied with my apple. Apple is the next killer app. Apple was the best investment I ever made.",
    },
    {
        name: "Nevil J",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        text: "I would also like to say thank you to all your staff. I just can't get enough of apple. I want to get a T-Shirt with apple on it so I can show it off to everyone.",
    },
    {
        name: "Moria Y",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
        text: "Without apple, we would have gone bankrupt by now. I don't always clop, but when I do, it's because of apple. It's really wonderful.",
    },
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");



let idx=0;

updateTestimonial();

function updateTestimonial(){
    // deconstructor
  const {name,photoUrl,text} = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
idx++;
if(idx === testimonials.length){
    idx=0;
}
setTimeout(() =>{
    updateTestimonial();
},2000);
}