import ImgOne from '../../assets/images/gallery/image-29.jpg'
import ImgTwo from '../../assets/images/gallery/image-59.jpg'
import ImgThree from '../../assets/images/gallery/image-53.jpg'
import ImgFour from '../../assets/images/gallery/image-19.jpg'

const About = () => {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600">
        <h2 className="text-5xl text-center uppercase text-black">About</h2>
        <p className="text-base  sm:text-lg ">
        Harshith Godishala is a talented photographer hailing from the vibrant city of Hyderabad, India. With a keen eye for detail and a passion for capturing moments that tell a story, Harshith has established himself as a renowned photographer in the photography industry.
        With a deep-rooted love for photography from a young age, Harshith's journey as a photographer has been nothing short of extraordinary. He has honed his craft over the years, capturing a diverse range of subjects with his unique artistic perspective. From breathtaking landscapes and stunning cityscapes to mesmerizing portraits and captivating street photography, Harshith's portfolio is a testament to his skill and creativity.
        As a true artist, Harshith believes that every photograph is an opportunity to create something extraordinary. He meticulously plans every photoshoot, paying attention to lighting, composition, and other crucial elements to ensure that each image captures the essence of the moment. His dedication and unwavering commitment to excellence have earned him a loyal clientele who trust him to immortalize their precious memories through his lens.
        Harshith's work has been widely recognized and appreciated, earning him numerous accolades and awards. He has also been featured in renowned publications and exhibited his work in prestigious galleries, further establishing his reputation as a top-notch photographer.
        </p>
      </section>
      <section className="flex flex-col sm:flex-row gap-1 p-8 ">
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgOne}
            alt="Colour"
          />
          <p className="font-bold">Colour</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgTwo}
            alt="Framing"
          />
          <p className="font-bold">Framing</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgThree}
            alt="Emotion"
          />
          <p className="font-bold">Emotion</p>
        </section>
        <section>
          <img
            className="max-w-full w-56 h-52 object-cover	"
            src={ImgFour}
            alt="MotionBlur"
          />
          <p className="font-bold">MotionBlur</p>
        </section>
      </section>
    </article>
  )
}

export default About
