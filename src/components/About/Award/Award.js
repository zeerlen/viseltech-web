"use client";
import {
  ClipboardDocumentListIcon,
  CodeBracketIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import CountUp from "react-countup";

const Award = () => {
  const [countingOn, setCountingOn] = useState(false);
  const stats = [
    
    {
      id: 1,
      name: "Business owners are happy with us",
      value: <CountUp start={0} end={6780} duration={2} />,
      icon: UserIcon,
    },
    {
      id: 2,
      name: "Expert Instructors",
      value: <CountUp start={0} end={2187} duration={2} />,
      icon: ClipboardDocumentListIcon,
    },
    {
      id: 3,
      name: "Satisfied customer",
      value: <CountUp start={0} end={8880} duration={2} />,
      icon: UserGroupIcon,
    },
    {
      id: 4,
      name: "Project with web/Apps",
      value: <CountUp start={0} end={3548} duration={2} />,
      icon: CodeBracketIcon,
    },
  ];
  return (
    <section className="bg-slate-50">
      <div className="app__container py-16 sm:py-32">
        <div className="app__container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="primary-heading mb-8">
                Award Wining <br />
                <span className="highlight">Digital Agency</span> We Are
              </h1>
              <p className="app__text">
                "We are an award-winning digital agency, celebrated for our
                innovative approach and exceptional results. With a passion for
                creativity and cutting-edge technology, we strive to exceed
                client expectations and set industry standards. Our team's
                dedication and expertise have earned us prestigious accolades,
                solidifying our reputation as a leader in the digital realm.
                Partner with us and experience the difference of working with an
                award-winning powerhouse."
              </p>
            </div>
            <div className="mt-5 md:mt-0 md:ms-auto my-auto">
              <ul className="list-image-[url(yes.png)] list-inside app__text">
                <li>Create Shareable Content</li>
                <li>Make Sharing Content Easy</li>
                <li>Rewarding Loyal Followers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;
