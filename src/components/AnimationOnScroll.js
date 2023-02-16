import React, {useState} from 'react'

export default function AnimationOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    })
  })

  const hiddenElements = document.querySelectorAll('inactive');
  hiddenElements.forEach((element) => observer.observe(element));

  return 
}
