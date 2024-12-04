import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const About = () => {
  return (
    <div>
        
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to Forever Ecommerce, your ultimate destination for trendy and timeless clothing. We believe in fashion that speaks to every individual's unique style, offering a diverse range of high-quality apparel that caters to all tastes and occasions. From everyday essentials to statement pieces, our curated collections are designed to inspire confidence and comfort. At Forever Ecommerce, we are committed to sustainability and ethical practices, ensuring that our products are not only stylish but also responsibly made. Join us on a journey of self-expression and discover clothing that helps you shine, forever.</p>

          <p>
          At Forever Ecommerce, we are passionate about fashion and dedicated to bringing you the latest trends and timeless styles. Our online store is a one-stop shop for fashion-forward individuals looking to express themselves through clothing. We carefully select every piece in our collection, ensuring a perfect blend of quality, comfort, and style.
          </p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever Ecommerce is to empower individuals through fashion by providing a diverse range of high-quality clothing that celebrates personal style. We strive to make fashion accessible and enjoyable for everyone, while also committing to sustainable practices and ethical sourcing.</p>
        </div>
      </div>

      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5">
          <b className="text-gray-600">Quality Assurance:</b>
          <p>At Forever Ecommerce, quality is at the heart of everything we do. We are committed to providing our customers with clothing that meets the highest standards of craftsmanship and durability.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">At Forever Ecommerce, we prioritize convenience to make your shopping experience as seamless and enjoyable as possible. Our user-friendly website allows you to browse the latest fashion trends and timeless pieces with ease, all from the comfort of your home.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">At Forever Ecommerce, exceptional customer service is our promise to you. We believe that every customer deserves a personalized and attentive shopping experience, and we are dedicated to exceeding your expectations at every step. </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
