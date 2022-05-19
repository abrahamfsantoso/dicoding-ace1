import './about.css';

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://storage.googleapis.com/projectdicoding1/IMG-20171028-WA0013.jpg'
            alt=''
            className='a-img'
          />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>
        <p className='a-desc'>
          Versatile DevOps Engineer with 1 year of hands-on experience in
          automating and optimizing mission critical deployments over small and
          large infrastructure. Proficient with multiple cloud service providers
          e.g. AWS, Azure and GCP, and in developing CI/CD pipelines using tools
          such as Github Actions and AWS CodePipeline.
        </p>
      </div>
    </div>
  );
};

export default About;
