import React from "react";
import Header from "../../Components/Header/Header";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mt-10 flex items-center h-10">
        <Link to="/registration">
        <button className="rounded-sm w-28 h-full  bg-gradient-to-r from-teal-900 via-teal-600 to-teal-100 hover:bg-[#403F3F] text-white font-semibold hover:text-white py-2  border-2 border-none hover:border-transparent  transition duration-300 ease-in-out">
          Registration
        </button>
        </Link>
        <Marquee className="text-4xl ml-6">
          <p>
            "Fitness is not about being better than someone else; it's about
            being better than you used to be." - Unknown
          </p>

          <p>"The only bad workout is the one that didn't happen." - Unknown</p>

          <p>"Don't wish for a good body; work for it." - Unknown</p>

          <p>"The body achieves what the mind believes." - Unknown</p>

          <p>
            "Your body can stand almost anything. It's your mind that you have
            to convince." - Unknown
          </p>

          <p>
            "The pain you feel today will be the strength you feel tomorrow." -
            Unknown
          </p>

          <p>"Sweat is just fat crying." - Unknown</p>

          <p>
            "Exercise is a celebration of what your body can do, not a
            punishment for what you ate." - Unknown
          </p>

          <p>"You're only one workout away from a good mood." - Unknown</p>

          <p>
            "Strength doesn't come from what you can do; it comes from
            overcoming the things you once thought you couldn't." - Rikki Rogers
          </p>

          <p>
            "Health is a relationship between you and your body." - Terri
            Guillemets
          </p>

          <p>
            "The only way to do great work is to love what you do." - Steve Jobs
          </p>

          <p>
            "Today I will do what others won't, so tomorrow I can accomplish
            what others can't." - Jerry Rice
          </p>

          <p>
            "Success is walking from failure to failure with no loss of
            enthusiasm." - Winston S. Churchill
          </p>

          <p>
            "It's not about perfect. It's about effort. And when you bring that
            effort every single day, that's where transformation happens. That's
            how change occurs." - Jillian Michaels
          </p>
        </Marquee>
      </div>
      <div>
        <Header></Header>
      </div>
    </div>
  );
};

export default Home;
