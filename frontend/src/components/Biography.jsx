const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            We are more than just a healthcare facility. We are a dedicated team
            of professionals committed to providing exceptional care and
            ensuring the well-being of our community. With a history of 20 years
            of service, we have built a reputation for delivering high-quality
            healthcare with a personal touch.
          </p>
          <h6>Our Mission</h6>
          <p>
            Our mission is to provide comprehensive, compassionate, and
            patient-centered care. We strive to improve the health of those we
            serve through excellence in clinical care, education, and research.
          </p>
          <h6>Our Vision</h6>
          <p>
            To be a leading healthcare provider recognized for innovation and
            excellence in patient care, with a commitment to the health and
            well-being of our community.
          </p>
          <h6>Our Values</h6>
          <p>
            <li>We treat each patient with empathy, respect, and kindness.</li>
            <li>We pursue the highest standards in healthcare through continuous improvement and innovation.</li>
            <li>We believe in the power of teamwork and partnerships to achieve optimal patient outcomes.</li>
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
