import React from 'react';
import './TechElevate.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Accordion from '../../components/Accordion/Accordion';

const TechElevate = () => {
  const handleCheckout = (url) => (event) => {
    event.preventDefault();
    window.location.href = url;
  };

  return (
    <div className="tech-elevate">
      <Header />
      <main className="page-container">
        <h1 className="stylish-font">Get Real Skills with Tech Elevate</h1>
        <p className="sub-text">
          Welcome to Tech Elevate, your destination for practical technology training programs taught by industry professionals. Gain real-world skills for immediate job placement.
        </p>
        <section className="why-choose-us">
          <h2>Why Choose Tech Elevate</h2>
          <div className="cards">
            <div className="card-container">
              <p><em>We are proud partners with Microsoft, providing you with the latest tools and resources. This partnership ensures you are learning with the most up-to-date and industry-standard technology, preparing you for the demands of the tech world.</em></p>
            </div>
            <div className="card-container">
              <p><em>Gain access to Microsoft tools like Power BI, Power Platform, Azure, Machine Learning, SQL, and more for one year. These tools are crucial in today's tech environment and having hands-on experience will give you a competitive edge.</em></p>
            </div>
            <div className="card-container">
              <p><em>Get references for job experiences, helping you stand out to potential employers. Our program is designed to simulate real job environments, giving you the experience you need to excel in your career.</em></p>
            </div>
            <div className="card-container">
              <p><em>Receive complimentary textbooks and materials to support your learning journey. We provide all the necessary resources to ensure you have everything you need to succeed in your courses and beyond.</em></p>
            </div>
          </div>
        </section>
        <div className="courses">
          <div className="course">
            <img src="/images/Businessintelligence.svg" alt="Business Intelligence" className="course-img" />
            <h2>Business Intelligence</h2>
            <Accordion
              title="Power BI"
              content={[
                <ul>
                  <li>Introduction to Power BI, navigating the interface, and creating simple reports.</li>
                  <li>Importing data from various sources, data transformation techniques, and data cleaning.</li>
                  <li>Creating interactive reports and dashboards with real-world data sets.</li>
                  <li>Advanced visualization techniques, publishing reports, and sharing securely within organizations.</li>
                </ul>
              ]}
            />
            <Accordion
              title="SQL"
              content={[
                <ul>
                  <li>Understanding SQL syntax and database fundamentals through hands-on exercises.</li>
                  <li>Writing basic SQL queries to retrieve and manipulate data from databases.</li>
                  <li>Performing advanced SQL operations such as complex joins, subqueries, and optimization techniques.</li>
                  <li>Designing and managing databases, implementing best practices for scalability and efficiency.</li>
                </ul>
              ]}
            />
            <button onClick={handleCheckout('https://buy.stripe.com/bIY1693YAcFMbx66os')} className="register-link">Register Now</button>
          </div>

          <div className="course">
            <img src="/images/Datascience.svg" alt="Data Science" className="course-img" />
            <h2>Data Science</h2>
            <Accordion
              title="Machine Learning"
              content={[
                <ul>
                  <li>Learning the basics of machine learning concepts and algorithms through practical examples.</li>
                  <li>Data preprocessing and feature engineering, including handling missing data and feature scaling.</li>
                  <li>Model selection and evaluation, using techniques to choose and validate the best models.</li>
                  <li>Applying advanced machine learning techniques and deploying models to real-world scenarios.</li>
                </ul>
              ]}
            />
            <Accordion
              title="Large Language Models (LLM) and Prompt Engineering"
              content={[
                <ul>
                  <li>Exploring the architectures and capabilities of large language models with practical tasks.</li>
                  <li>Training and fine-tuning LLMs, applying them to various natural language processing tasks.</li>
                  <li>Designing and optimizing prompts for different applications, focusing on real-world use cases.</li>
                  <li>Addressing ethical considerations, bias mitigation, and evaluating model performance in practical scenarios.</li>
                </ul>
              ]}
            />
            <button onClick={handleCheckout('https://buy.stripe.com/3csaGJeDegW2cBa002')} className="register-link">Register Now</button>
          </div>

          <div className="course">
            <img src="/images/PowerPlatform.svg" alt="Power Platform" className="course-img" />
            <h2>Power Platform</h2>
            <Accordion
              title="Low Code"
              content={[
                <ul>
                  <li>Overview of Power Apps, exploring its ecosystem and capabilities through hands-on projects.</li>
                  <li>Designing and building canvas apps, creating user-friendly interfaces connected to data sources.</li>
                  <li>Developing model-driven apps, working on complex applications with sophisticated data models.</li>
                  <li>Using formulas and expressions, publishing apps, and managing them for secure and scalable deployment.</li>
                </ul>
              ]}
            />
            <Accordion
              title="No Code"
              content={[
                <ul>
                  <li>Introduction to Power Automate, creating and managing basic flows to automate tasks.</li>
                  <li>Building complex workflows with conditions, loops, and approval processes.</li>
                  <li>Implementing error handling and optimization techniques for efficient workflow management.</li>
                  <li>Applying security best practices and governance policies to automated processes.</li>
                </ul>
              ]}
            />
            <button onClick={handleCheckout('https://buy.stripe.com/bIYaGJeDe0X47gQ5kn')} className="register-link">Register Now</button>
          </div>

          <div className="course">
            <img src="/images/EnterpriseArchitecture.svg" alt="Enterprise Architecture" className="course-img" />
            <h2>Enterprise Architecture</h2>
            <Accordion
              title="Solution Architecture"
              content={[
                <ul>
                  <li>Learning architecture design fundamentals, including key principles and methodologies.</li>
                  <li>Designing scalable and resilient systems using cloud computing and infrastructure best practices.</li>
                  <li>Ensuring security and compliance with industry standards in architecture design.</li>
                  <li>Focusing on integration and interoperability, and honing project management and communication skills.</li>
                </ul>
              ]}
            />
            <Accordion
              title="Data Architecture"
              content={[
                <ul>
                  <li>Mastering data architecture fundamentals with practical applications.</li>
                  <li>Creating efficient and scalable data models and designs.</li>
                  <li>Implementing data integration and ETL processes for smooth data flow.</li>
                  <li>Managing data storage, ensuring database security, and applying data governance best practices.</li>
                </ul>
              ]}
            />
            <button onClick={handleCheckout('https://buy.stripe.com/cN29CF2Uw5dk30A6op')} className="register-link">Register Now</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechElevate;
