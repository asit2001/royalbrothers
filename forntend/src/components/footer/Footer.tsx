import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import "./Footer.css";
import data from "../../data";

export default function Footer() {
  const cityNames = data;
  return (
    <>
      <div className="container">
        <div className="footer_container">
          <div className="footer_boxes">
            <h5 className="footer_boxes_heading">ROYAL BROTHERS</h5>
            <ul>
              <li>
                <span>
                  <FiMail size={30} />
                </span>
                <p>support@royalbrothers.com</p>
              </li>
              <li>
                <span>
                  <IoCallOutline size={30} />
                </span>
                <p>+917795687594/+919019595595</p>
              </li>
            </ul>
          </div>

          <div className="footer_boxes">
            <h5 className="footer_boxes_heading">COMPANY</h5>

            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>
                Careers <span className="hiringAlert">we're hiring !</span>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer_boxes">
            <h5 className="footer_boxes_heading">Policies</h5>

            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Conditions </li>
            </ul>
          </div>

          <div className="footer_boxes">
            <h5 className="footer_boxes_heading">Quick Links</h5>

            <ul>
              <li>Tariff</li>
              <li>Offers</li>
              <li>Own a franchise</li>
              <li>Earn with us</li>
              <li>Indian bike routes</li>
            </ul>
          </div>

          <div className="footer_boxes">
            <h5 className="footer_boxes_heading">Follow us</h5>

            <ul>
              <li>
                <span>
                  <BsInstagram size={25} />
                </span>
                <span>
                  <FiFacebook size={25} />
                </span>
                <span>
                  <FiTwitter size={25} />
                </span>
                <span>
                  <SlSocialLinkedin size={25} />
                </span>
                <span>
                  <SlSocialYoutube size={25} />
                </span>
              </li>
            </ul>
          </div>
          <div className="footer_boxes">
            <h5 className="footer_boxes_heading">DownLoad Our App</h5>
            <ul>
              <li>
                <img
                  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/ios-fcbc0490e08247e61abc51ad438f9c8c4ddad79de1158a06558cf301ef8079eb.webp"
                  alt=""
                  className="footer__img"
                />
                <img
                  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/play_store-b25c1e9f919b2b794263ac0c55102263093528f94667842de227471c46d57a3b.webp"
                  alt=""
                  className="footer__img"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sub_footer">
        <div className="sub_footer_container">
          <h1>Bike rentals in Ahmedabad</h1>
          <p>
            Over the years, Ahmedabad has become one of India's most notable
            metropolises. It retains its historic heritage while embracing
            modern technology and architecture. This jewel of Western India is a
            popular tourist destination with many attractions such as the Jumma
            Masjid, Sabramati Ashram, Siddi Sayed Mosque, Hutheesing Jain
            Temple, and Kankaria Lake. While there are tourist buses and travel
            packages, the easiest way to take in the sights and sounds is by
            taking a bike on rent in Ahmedabad.
          </p>
          <p>
            Rental bikes in Ahmedabad are not difficult to find and they can be
            quite the blessing. These bikes give you the liberty to explore the
            city as leisurely as you would like. Whether you’re in the city for
            a short or long trip, bike rentals in Ahmedabad are exactly what you
            need. Without having to resort to taxis and buses or haggling with
            autowalas, you have the freedom to go anywhere in the city. You can
            also stop wherever you would like to take photographs or taste the
            city’s delicious roadside food. Moral of the story is that rental
            bikes in Ahmedabad are your best friend.
          </p>

          <h1>Enjoy a smooth trip with bikes on rent in Ahmedabad</h1>
          <p>
            The city of Ahmedabad has some of the most glorious architecture in
            the country. From the time of sultans to today, the city has
            certainly evolved. While it takes great pride in its origins and
            history, the people of Ahmedabad have opened their arms to the
            modern ways of architecture, business, technology, and lifestyle.
            This amalgamation makes it one of the most remarkable cities in
            India. It is, however, also known for its traffic and populous
            localities, so make sure you choose bike rent in Ahmedabad for a
            problem-free trip.
          </p>
          <p>
            Bikes for rent in Ahmedabad are the ideal way to travel inside the
            city. It can be tricky to maneuver a car through the many narrow
            lanes inside Ahmedabad. Most people prefer to travel on foot or in
            autorickshaws, so some areas of the city can become pretty
            congested. To save time and avoid being stuck in crowded
            neighborhoods, bike rental in Ahmedabad should be your primary
            choice for transportation.
          </p>

          <h1>
            Royal Brothers, your reliable partner for bike rental in Ahmedabad
          </h1>
          <p>
            Before Royal Brothers came into being, getting vehicles for rent in
            any city was a difficult task. This forced people to stick to public
            transportation for their travels. Over the years, Royal Brothers has
            opened shop in more than 40 cities, making us the best automobile
            rental service provider in the country.
          </p>
          <p>
            Providing bikes for rent in Ahmedabad, one of India's most
            fascinating cities and a tourist destination, has been a feat. This
            city in Gujarat is known for its tourism, antiques, and textile, so
            you can imagine the number of people visiting every year. Bike rent
            in Ahmedabad allows you the opportunity to avoid crowds and traffic,
            making your trip more peaceful and enjoyable.
          </p>
          <p>
            Royal Brothers specializes in bike rentals in Ahmedabad, offering
            you a variety of motorcycles and scooters for your travel needs.
            Visit our well-curated website for more details on two-wheelers and
            tariffs.
          </p>
        </div>

        <div className="cityLinks">
          <h2 className="cityLinksHeading">Our Presence</h2>

          <ul className="para">
            {cityNames.map((it) => (
              <li key={it.name}>{it.name}</li>
            ))}
          </ul>
        </div>

        <div className="footerCopy">
          <p>Made with &#10084; by team Royal</p>
        </div>
      </div>
    </>
  );
}
