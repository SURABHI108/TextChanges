import React from 'react';

export default function about() {
  return (
    <div classNameName='container'>
        <h2 className='my-2'>About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Textchanges gives you a way to analyze your text quicly and affirmatly.provide word count characters count facility also provide how many time take for read that text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="vcollapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Whether you're a writer, student, or just love playing with words, our free service has got you covered. Simply type or paste your text into the provided textarea, and watch as we provide you with real-time word and character counts. Need to switch between uppercase and lowercase? No problem! Our user-friendly interface allows you to convert your text effortlessly. Enjoy the convenience of on-the-fly text manipulation without any cost. Enhance your writing experience with TextChangis - where words meet versatility!
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        
Certainly! Here's a paragraph emphasizing browser compatibility for your website:

Experience the power of TextChangis seamlessly across different browsers! Our website is designed with compatibility in mind, ensuring a consistent and reliable performance on popular web browsers such as Chrome, Firefox, Safari, and Edge. No matter your preferred browser, you can enjoy the convenience of instant word and character count, along with the ability to convert text to uppercase and lowercase - all for free! Whether you're on your desktop or mobile device, TextChangis is ready to elevate your text editing experience, providing a user-friendly and responsive interface across the browsers you love. Write, analyze, and transform text with confidence, knowing that TextChangis supports the browser of your choice.
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
