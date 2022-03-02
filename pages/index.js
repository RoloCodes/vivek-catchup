import Card from '../components/card/Card'
import ContactForm from '../components/contactForm/ContactForm'
import Hero from '../components/hero/Hero'
import Layout from '../components/layout/Layout'
import SectionBreak from '../components/sectionbreak/SectionBreak'

function Home() {
  return (
    <Layout>
      <title>tabname here</title>
      <Hero
        heading="Hey I'm the dude!"
        subHeading="Here's some work in my favorite areas of study. These include Coding, Robotics, Photography, Video Editing, and saving the environment."
        buttonText="Learn More"
        bgImage="/bgGif.gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/project.jpeg"
          alt="a cool project"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="a cool project"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="a cool project"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
      <ContactForm />
    </Layout>
  )
}

export default Home
