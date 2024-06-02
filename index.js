import express from "express";
import fs from "fs";
import { marked } from "marked";
import Mustache from "mustache";
import moment from "moment";

const app = express();

app.use(express.static("./public"));
let resume = {
  basics: {
    name: "Sunil Barewar",
    email: "sunilvbarewar@gmail.com",
    phone: "7030567706",
    photo: {
      url: "https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg",
      filters: {
        size: 218,
        shape: "circle",
        border: true,
        grayscale: false,
      },
      visible: true,
    },
    summary:
      "Highly-motivated and enthusiastic engineer with deep knowledge of JavaScript & Node.js. Looking for a technical role where I can learn, grow and contribute to build quality products.",
    website: "",
    headline: "Software Developer",
    location: {
      city: "Gondia",
      region: "Maharashtra",
      address: "",
      country: "",
      postalCode: "441614",
    },
    profiles: [
      {
        id: "672654df-7eb6-4bd4-9f3e-a142cae40fd3",
        url: "https://www.linkedin.com/in/sunil-barewar",
        network: "linkedin",
        username: "sunil-barewar",
      },
      {
        id: "d3d05662-1af7-420d-8d46-9301fb56c995",
        url: "https://github.com/SunilBarewar",
        network: "github",
        username: "SunilBarewar",
      },
      {
        id: "fd483aef-7d4e-4ae3-aca6-f7d0e73b6a47",
        url: "https://leetcode.com/sunilbarewar/",
        network: "leetcode",
        username: "Leetcode",
      },
    ],
    birthdate: "2002-09-20",
  },
  sections: {
    work: {
      id: "work",
      name: "Work Experience",
      type: "work",
      items: [
        {
          id: "3dcb01df-7814-49a7-9f5e-b5d576223477",
          url: "",
          date: {
            end: "2023-03-30T18:30:00.000Z",
            start: "2022-11-30T18:30:00.000Z",
          },
          name: "Software Developer Intern",
          summary:
            "- Learned and worked with MERN stack Technologies.\n- Developed REST APIs backend services. \n- Participated in team meetings and gave status updates on task progress.\n- Developed user interfaces using React.js.",
          position: "Cling Multi Solutions",
        },
      ],
      columns: 1,
      visible: true,
    },
    skills: {
      id: "skills",
      name: "Skills",
      type: "basic",
      items: [
        {
          id: "3330fac9-c53e-4e6c-b752-81292dcb8419",
          name: "HTML",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "1db58841-9069-4d25-8a09-80a2e24d1ca0",
          name: "CSS",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "e640bfe0-cb83-4ffb-a625-247b2363196c",
          name: "Javascript",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "0bbc05ee-eec6-4d39-b612-0e9cd7864e7f",
          name: "Typescript",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "600a0e1a-41de-4521-bf30-5489d48f43ed",
          name: "C++",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "0cd5c019-92c5-4e1a-8d31-d7894972834f",
          name: "Node.js",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "a810e25e-325a-4771-8757-69eae0afa0da",
          name: "Express.js",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "77750473-f02e-41ba-9bb9-3598e260e745",
          name: "MongoDB",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "4805793d-34e1-4c7e-a914-4d1c1d000286",
          name: "MySQL",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "f99d50f3-02f7-44b4-aca5-dec3de11eaa1",
          name: "React.js",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "c0c48a98-2089-4e81-aad4-b790027ac1bb",
          name: "AWS (S3,EC2,RDS)",
          level: "",
          keywords: [],
          levelNum: 0,
        },
        {
          id: "887eb6a3-fa01-481b-b892-67842b482d16",
          name: "Git/Github",
          level: "",
          keywords: [],
          levelNum: 0,
        },
      ],
      columns: 2,
      visible: true,
    },
    projects: {
      id: "projects",
      name: "Projects",
      type: "basic",
      items: [
        {
          id: "9d27ccdd-8a69-483c-adc5-d692ee7f23ed",
          url: "https://e-commerce.vercel.app/",
          date: {
            end: "",
            start: "",
          },
          name: "E-commerce application",
          summary:
            "- GitHub link -  [https://github.com/ecommerce-api-ts.git](https://github.com/SunilBarewar/ecommerce-api-ts.git)\n- Live : [https://e-commerce.vercel.app/](https://e-commerce-frontend-iota-nine.vercel.app/)\n- Tech stack :  React.js, Typescript, Node.js, MongoDB, Tailwind CSS.\n- Implemented secure authentication with **JWT** and **HTTP** Only cookies.\n- Integrated **Stripe** for payment collection.\n- Applied **lazy loading** to reduce initial load time and enhance overall application performance\n- Developed a RESTful API  for seamless communication.\n- Utilized **TypeScript** in the API for code maintainability and error prevention.\n- Implemented **indexing** to optimize the searching time of database query.\n\n\n",
          keywords: [],
          description: "An ecommerce website with user authentication",
        },
        {
          id: "4991d10b-e00a-4edd-a8c5-15c3a5ca7094",
          url: "",
          date: {
            end: "",
            start: "",
          },
          name: "Group chat application",
          summary:
            "- [GitHub link : https://github.com/chatapp-backend.git](https://github.com/SunilBarewar/chatapp-backend.git)\n- Tech Stack : React.js, Node.js, Express.js, MySQL, Redis , Kafka\n- Implemented real-time message delivery system using WebSockets.\n- Used **Redis Pub-Sub** to scale WebSocket connections.\n- Integrated **Kafka** for efficient processing of 1000s of messages per second.\n- Followed MVC(model view controller) design pattern.\n- Utilized **AWS S3** to store and manage images.",
          keywords: [],
          description:
            "Scalable chat application with one-on-one and group chat feature",
        },
        {
          id: "d6d7762c-6a65-4403-8e86-087d9d31cb95",
          url: "",
          date: {
            end: "",
            start: "",
          },
          name: "Expense tracker",
          summary:
            "- GitHub link : [https://github.com/Expense-app-backend.git](https://github.com/SunilBarewar/Expense-app-backend.git)\n- Tech Stack : HTML, React.js, JavaScript, Node.js, Express.js, MySQL, MongoDB\n- User can add, delete and edit expenses.\n- Integrated **Razorpay** payment gateway.\n- Implemented premium user feature like leaderboard, report generation.\n- Added password encryption using **Bcrypt** and **JWT** authorization .\n- Deployment tested on **AWS EC2** and **RDS**.\n",
          keywords: [],
          description:
            "User can manage day to day expenses and keep track of their spending.",
        },
      ],
      columns: 1,
      visible: true,
    },
    education: {
      id: "education",
      name: "Education",
      type: "basic",
      items: [
        {
          id: "c4451156-2559-47ec-b811-fc9a562e02c3",
          url: "",
          area: "Computer Science",
          date: {
            end: "2023-05-31T18:30:00.000Z",
            start: "2020-07-31T18:30:00.000Z",
          },
          score: "78",
          degree: "Bachelor of Science",
          courses: [],
          summary: "",
          institution: "Dhote Bandhu Science College , Gondia ",
        },
        {
          id: "93b45b7d-6ebf-4a16-9adc-7e9d01992bb5",
          url: "",
          area: "  PCM",
          date: {
            end: "2020-02-29T18:30:00.000Z",
            start: "2019-05-31T18:30:00.000Z",
          },
          score: "82",
          degree: "Senior Secondary",
          courses: [],
          summary: "",
          institution: "Dhote Bandhu Science College , Gondia ",
        },
      ],
      columns: 1,
      visible: true,
    },
    interests: {
      id: "interests",
      name: "Interests",
      type: "basic",
      items: [
        {
          id: "f0a44d78-4c9d-44fb-8dbd-f41b5d11d0fa",
          name: "Travelling",
          keywords: [],
        },
        {
          id: "33b1719e-5a42-4aee-a853-4f8b4d175814",
          name: "Badminton",
          keywords: [],
        },
        {
          id: "f44c13ec-ead5-4f0d-9e2b-40ad6d5c4075",
          name: "Teaching",
          keywords: [],
        },
      ],
      columns: 2,
      visible: true,
    },
    languages: {
      id: "languages",
      name: "Languages",
      type: "basic",
      items: [
        {
          id: "10315250-4a39-49a3-82dd-4ad8e7747639",
          name: "English",
          level: "Expert",
          levelNum: 0,
        },
        {
          id: "2ffcb4ee-9b57-450a-97db-a5c7f6745c54",
          name: "Hindi",
          level: "Expert",
          levelNum: 0,
        },
      ],
      columns: 2,
      visible: true,
    },
    volunteer: {
      id: "volunteer",
      name: "Volunteer Experience",
      type: "basic",
      items: [],
      columns: 2,
      visible: true,
    },
    awards: {
      id: "awards",
      name: "Awards",
      type: "basic",
      items: [],
      columns: 2,
      visible: true,
    },

    references: {
      id: "references",
      name: "References",
      type: "basic",
      items: [],
      columns: 2,
      visible: true,
    },
    publications: {
      id: "publications",
      name: "Publications",
      type: "basic",
      items: [],
      columns: 2,
      visible: true,
    },
    certifications: {
      id: "certifications",
      name: "Certifications",
      type: "basic",
      items: [
        {
          id: "49e66015-deac-4532-adf7-29db2fd3af79",
          url: "",
          date: "",
          name: "Node.js (Basic)",
          issuer: "HackerRank",
          summary:
            "[Certificate](https://www.hackerrank.com/certificates/fe0f72d55827)",
        },
      ],
      columns: 1,
      visible: true,
    },
    "a4a37ffa-deb9-41b2-b36f-7be14321db3a": {
      name: "Interpersonal Skills",
      type: "custom",
      items: [],
      columns: 2,
      visible: true,
    },
  },
  metadata: {
    css: {
      value:
        "/* Enter custom CSS here */\n\n* {\n    outline: 1px solid #000;\n}",
      visible: false,
    },
    date: {
      format: "MMMM DD, YYYY",
    },
    page: {
      format: "A4",
    },
    theme: {
      text: "#000000",
      primary: "#03a9f4",
      background: "#ffffff",
    },
    layout: [
      [
        [
          "work",
          "education",
          "projects",
          "volunteer",
          "references",
          "a4a37ffa-deb9-41b2-b36f-7be14321db3a",
        ],
        [
          "skills",
          "interests",
          "languages",
          "awards",
          "certifications",
          "publications",
        ],
      ],
    ],
    locale: "en",
    template: "gengar",
    typography: {
      size: {
        body: 12,
        heading: 28,
      },
      family: {
        body: "Open Sans",
        heading: "Open Sans",
      },
    },
  },
  public: true,
};

function getValueByPath(obj, propertyPath) {
  const keyParts = propertyPath.split(".");
  const keys = [];

  for (const part of keyParts) {
    const match = part.match(/\[(\d+)\]/);
    if (match) {
      const index = parseInt(match[1], 10);
      const remainingKey =
        part.slice(0, match.index) || part.slice(match.index + match[0].length);
      if (remainingKey) {
        keys.push(remainingKey);
      }
      keys.push(index);
    } else {
      keys.push(part);
    }
  }

  let currentObject = obj;
  for (let i = 1; i < keys.length; i++) {
    let key = keys[i];
    const isArrayIndex = !isNaN(key);

    if (isArrayIndex) {
      const index = parseInt(key, 10);
      if (
        !Array.isArray(currentObject) ||
        index < 0 ||
        index >= currentObject.length
      ) {
        return undefined;
      }
      currentObject = currentObject[index];
    } else {
      if (!currentObject.hasOwnProperty(key)) {
        return undefined;
      }
      currentObject = currentObject[key];
    }
  }

  return currentObject;
}
function manipulateResume(resume) {
  for (const sectionName of Object.keys(resume.sections)) {
    const section = resume.sections[sectionName];
    if (section && section.items) {
      section.items.forEach((item) => {
        if (item.summary) {
          item.summary = item.summary ? marked(item.summary) : "";
        }

        if (item.date) {
          const startDate = moment(item.date.start).format("MMMM-YYYY");
          let endDate;
          if (item.date.end) {
            endDate = moment(item.date.end).format("MMMM-YYYY");
          } else {
            endDate = "Present";
          }
          item.date = `${startDate} - ${endDate}`;
        }
      });
    }
  }

  return resume;
}

resume = manipulateResume(resume);
function populateHtmlString(htmlString, sectionsData) {
  for (const sectionName in sectionsData) {
    const sectionData = sectionsData[sectionName];
    const delimiterStart = `!@!${sectionName}!@!`;
    const delimiterEnd = `!@!/!${sectionName}!@!`;

    const sectionTemplate = htmlString.substring(
      htmlString.indexOf(delimiterStart) + delimiterStart.length,
      htmlString.indexOf(delimiterEnd)
    );

    const mustacheTemplate = Mustache.render(
      `
      {{#items}}
        ${sectionTemplate}
      {{/items}}
    `,
      sectionData
    );

    // Replace the original section content with populated content
    htmlString = htmlString.replace(
      new RegExp(delimiterStart + ".*?" + delimiterEnd, "gs"),
      mustacheTemplate
    );
  }

  return htmlString;
}

const replaceDelimiters = (htmlString) => {
  const delimiterRegex = /\{\{(resume\.[^\}]+)\}\}/g;

  return htmlString.replace(delimiterRegex, (match, propertyPath) => {
    return getValueByPath(resume, propertyPath);
  });
};
app.get("/", (req, res) => {
  // Read the HTML file content
  const html = fs.readFileSync("templates/template_3.html", "utf8");

  // Replace delimiters with corresponding values
  // let modifiedHTML = populateHtmlString(html, resume.sections);
  // modifiedHTML = replaceDelimiters(modifiedHTML);
  // console.log(modifiedHTML);

  const modifiedHTML = Mustache.render(html, resume);
  // const htmlString = Mustache.parse(html, resume);

  res.send(modifiedHTML);
});

app.get("/resume", (req, res) => {
  res.send(
    marked(
      "- Learned and worked with MERN stack Technologies.\n- Developed REST APIs backend services. \n- Participated in team meetings and gave status updates on task progress.\n- Developed user interfaces using React.js."
    )
  );
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
