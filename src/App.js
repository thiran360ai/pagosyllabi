import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, NavDropdown } from 'react-bootstrap';

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="logo.png" width="30" height="30" className="d-inline-block align-top" style={{ marginLeft: "20px" }} alt="Logo" />
      </a>
      <h2 className="d-inline-block" style={{ marginLeft: "10px", marginRight: "20px" }}>PAGO Achievers</h2>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="engineeringDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Engineering
            </a>
            <div className="dropdown-menu" aria-labelledby="engineeringDropdown">
              <a className="dropdown-item" href="#eng">Year 1</a>
              <a className="dropdown-item" href="#eng">Year 2</a>
              <a className="dropdown-item" href="#eng">Year 3</a>
              <a className="dropdown-item" href="#eng">Year 4</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="artsScienceDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Arts & Science
            </a>
            <div className="dropdown-menu" aria-labelledby="artsScienceDropdown">
              <a className="dropdown-item" href="#arts">Year 1</a>
              <a className="dropdown-item" href="#arts">Year 2</a>
              <a className="dropdown-item" href="#arts">Year 3</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="mcaMbaDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              MCA & MBA
            </a>
            <div className="dropdown-menu" aria-labelledby="mcaMbaDropdown">
              <a className="dropdown-item" href="#mca">Year 1</a>
              <a className="dropdown-item" href="#mca">Year 2</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
  

const Carousel = () => (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{height: '25%'}}>
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{maxHeight:"92vh"}}>
            <div className="carousel-item active">
                <img src="Banner1.jpeg" className="d-block w-100" alt="First Slide" />
            </div>
            <div className="carousel-item">
                <img src="Banner2.jpeg" className="d-block w-100" alt="Second Slide" />
            </div>
            <div className="carousel-item">
                <img src="Banner3.jpeg" className="d-block w-100" alt="Third Slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
);


const Card = ({ image, heading, description }) => (
  <div className="card" style={{ width: '18rem', margin: '1rem',height: '18rem' }}>
      <img src={image} className="card-img-top" alt={heading} />
      <div className="card-body">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text"><b>{description}</b></p>
      </div>
  </div>
);

const Cards = ({ title, cards }) => (
  <div className="container mt-4">
      <h2>{title}</h2>
      <div className="row">
          {cards.map((card, index) => (
              <div className="col-md-4" key={index}>
                  <Card image={card.image} heading={card.heading} description={card.description} />
              </div>
          ))}
      </div>
  </div>
);


const Footer = () => (
    <footer className="footer bg-dark text-light" style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center">
        <h5>Contact Us</h5>
        <p>
          <i className="fas fa-phone-alt"></i> +91 9840369759
        </p>
        <p>
          <i className="fas fa-phone-alt"></i> +91 7305189759
        </p>
        <p>
          <i className="fas fa-globe"></i> <a href="https://pagoachievers.com" className="text-light" target="_blank" rel="noopener noreferrer">www.pagoachievers.com</a>
        </p>
      </div>
    </footer>
  );
  
  

const App = () => {
  const year1Eng = [
      {
          image: 'ori.png',
          heading: 'Orientation',
          description: 'Different between School / College',
      },
      {
          image: 'communication.jpg',
          heading: 'Basic importance of communication',
          description: 'communication',
      },
      {
          image: 'soft-skills-1536x1536.webp',
          heading: 'Identifying their skills',
          description: 'interpersonal & intra personal',
      },
      {
        image: 'book.jpg',
        heading: 'What they are going to study',
        description: 'To be discussed about the 4 years',
    },
    {
        image: 'engineering.png',
        heading: 'Why Engineering',
        description: '',
    },
    {
        image: 'a2.png',
        heading: 'Assesment 1',
        description: 'discussion observations, exams, etc.',
    }
  ];

  const year2Eng = [
    {
        image: 'comm2.webp',
        heading: 'Basic  level in Communication',
        description: 'Communication',
    },
    {
        image: 'writing.jpg',
        heading: 'Writing skills',
        description: 'Basic',
    },
    {
        image: 'apti.avif',
        heading: 'Aptitude & Verbal',
        description: 'General',
    },
    {
      image: 'frontend.jpg',
      heading: 'Technical into basic',
      description: 'Core',
  },
  {
    image: 'soft-skills-1536x1536.webp',
    heading: 'Inter personal skills',
    description: 'Skills',
},
{
    image: 'a1.png',
    heading: 'Assesment',
    description: 'Assesment',
},
];

const year3Eng = [
  {
      image: 'communication.jpg',
      heading: 'Intermediate level for communication',
      description: 'Communication',
  },
  {
      image: 'writing.jpg',
      heading: 'Writing skills',
      description: 'Intermediate',
  },
  {
      image: 'apti.avif',
      heading: 'Aptitude & Verbal',
      description: 'company specific',
  },
  {
    image: 'b5.jpg',
    heading: 'Technical',
    description: 'Mini projects, Certification, & others',
},
{
  image: 'skills2.png',
  heading: 'Skills',
  description: 'Interpersonal & Intra personal',
},
{
image: 'placement.jpg',
heading: 'Placement training ',
description: 'Training',
},
];

const year4Eng = [
  {
      image: 'resume.jpg',
      heading: 'Resume',
      description: '',
  },
  {
      image: 'gd.avif',
      heading: 'Group Discussion',
      description: 'A  to Z',
  },
  {
      image: 'interview.png',
      heading: 'Interview preparation',
      description: '',
  },
  {
    image: 'corporate.jpg',
    heading: 'Campus to Corporate',
    description: '',
},
{
  image: 'project.jpg',
  heading: 'Main projects',
  description: '',
},
{
    image: 'a2.png',
    heading: 'Assesment',
    description: 'Assesment',
},
];

const year1arts = [
  {
      image: 'ori.png',
      heading: 'Orientation',
      description: '',
  },
  {
      image: 'comm2.webp',
      heading: 'Communication',
      description: 'Importance',
  },
  {
      image: 'soft-skills-1536x1536.webp',
      heading: 'Skills',
      description: 'Skills enhancement',
  }
];


const year2arts = [
  {
      image: 'Wall paper.jpg',
      heading: 'Domain specific',
      description: 'core',
  },
  {
      image: 'apti.avif',
      heading: 'Aptitude & Verbal ',
      description: 'Importance',
  },
  {
      image: 'comm3.webp',
      heading: 'Business communication',
      description: 'Skills enhancement',
  },
  {
      image: 'writing.jpg',
      heading: 'Writing skills',
      description: 'Skills enhancement',
  },
  {
    image: 'extracurri.jpg',
    heading: 'Extra curricular Activities',
    description: ' To examine every individual talent',
},
{
    image: 'a2.png',
    heading: 'Assesment 2',
    description: ' observations, exams, etc.',
}
  
];

const year3arts = [
  {
      image: 'corporate.jpg',
      heading: 'Campus to corporate',
      description: 'core',
  },
  {
      image: 'exam.jpg',
      heading: 'Government exams prepartions',
      description: 'Importance',
  },
  {
      image: 'placement.jpg',
      heading: 'Placement training',
      description: 'Skills enhancement',
  }
];

const year1mca = [
  {
      image: 'comm2.webp',
      heading: 'Importance of communication',
      description: '',
  },
  {
      image: 'interp.jpg',
      heading: 'Identifying their interpersonal & intra personal skills',
      description: '',
  },
  {
      image: 'book.jpg',
      heading: 'Why MBA?',
      description: '',
  }
];

const year2mca = [
  {
      image: 'interview.png',
      heading: 'Advance Communication',
      description: '',
  },
  {
      image: 'Wall paper.jpg',
      heading: 'Domain specific training',
      description: '',
  },
  {
      image: 'placement.jpg',
      heading: 'Placement training',
      description: '',
  }
  
  
];

  return (
      <div style={{backgroundColor:'#D2C2C2'}}>
          <Navbar />
          <Carousel />

          <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body" style={{backgroundColor:'#938DA1',margin:'5px'}}>
          <h1 className="card-title" id="eng">Engineering</h1>
        </div>
      </div>
    </div>
          <Cards title="Year 1" cards={year1Eng} id="Eng1"/>
          <Cards title="Year 2" cards={year2Eng} />
          <Cards title="Year 3" cards={year3Eng} />
          <Cards title="Year 4" cards={year4Eng} />


          <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body" style={{backgroundColor:'#938DA1',margin:'5px'}}>
          <h1 className="card-title" id="arts">Arts and Science</h1>
        </div>
      </div>
    </div>
          <Cards title="Year 1" cards={year1arts} />
          <Cards title="Year 2" cards={year2arts} />
          <Cards title="Year 3" cards={year3arts} />


          <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body" style={{backgroundColor:'#938DA1',margin:'5px',}}>
          <h1 className="card-title" id="mca">MCA & MBA</h1>
        </div>
      </div>
    </div>
          <Cards title="Year 1" cards={year1mca} id="mca1"/>
          <Cards title="Year 2" cards={year2mca} id="mca2"/>
<Footer/>
      </div>
  );
};

export default App;
