export const projects = [
  {
    slug: "wayperu",
    name: "WayPeru",

    why: "I built WayPeru to help peruvian people and tourists in Peru to travel safe across the country.",
    challenges: `The idea was a heat-based map to represent dangerous zones, but yeah, where's supposed I should place the dangerous zones and how? And also, where's the dataset with the crime?

    I've been searching and I choose the official peruvian crime dataset, there I extracted the relevant info, cleaned the dataset and finally, use the given coordinates and assign them to the pixels in the map.

    Finally, once I have the heat layer, I can add a final layer to the routing algorithm to score the generated routes from 0 to 100 talking about danger, and choose the one with the lowest score.
    `,
    learning: "I learned how to work better with the Mapbox API and maps overall, also with routing algorithms.",
    
    tagline: "Get wherever you want with the safest route.",
    description:
      "WayPeru helps travelers plan routes across Peru while surfacing the safest option, not just the fastest one.",
    tags: ["Algorithms", "Mobile", "Mapbox", "React Native"],
    repo: "https://github.com/angbmz364/wayperu",
  },
  {
    slug: "centinela",
    name: "Centinela",

    why: "I identified a huge problem in my country: the fruit fly causes massive economic losses for farmers and the government.",
    challenges: "Talking about lab tests was a huge W for my project, using public and Dryad dataset images the model reached almost a perfect score, but yeah I knew that was a problem, perfection isn't a good signal. I tried with homemade images, and the result was expected, the model failed miserably in the tests. I engineered traps specially for the anastrepha fraterculus in my zone to gather my own dataset, so I can train my model with real-world trap images to fill that gap.",
    learning: "I finally get a good performance of the model by using a dataset specialized on the real traps the monitoring station actually use.",
    
    tagline:
      "ML project applying transfer learning to detect Anastrepha fraterculus plagues and notify the farmer.",
    description:
      "Centinela uses a transfer-learning model to spot Anastrepha fraterculus infestations in crop images and alerts the farmer as soon as a plague is detected.",
    tags: ["Machine Learning", "Agriculture", "Transfer Learning"],
    repo: "https://github.com/angbmz364/centinela",
  },
  {
    slug: "nova",
    name: "Nova",

    why: "AI today is really common, and rural people deserve access to this powerful tool too.",
    challenges: `Yes, rural cities has a lot of tech constraints, one, is the devices used there, they're not as powerful I'd like, so I need to, again, fall back to edge-ai. 
    I benchmarked the Qwen, Gemma, and Llama families, and I choosed Gemma4:E2B as the brain of the system, because it had a good performance on the tests, less hallucination rate, best overall knowledge and reasoning.
    But there was still a problem, a huge one: everyone was very dumb in math, since basic math equations like 2x + 2 = 8 made the model struggle, I decided to add a basic math engine plus an intent detector.
    So, if the intent detector detects math intent in the question, it delegates the task to the math engine, so the model just explains, not solves.
    If the intent is a factual question, it justs delegates the task to the model to asnwer.
    Pretty simple workflow.
    `,
    learning: "It was my first experience with harness engineering, and how I use them daily, and design one was funny.",
    tagline: "Offline-first scholar assistant for rural students.",
    description:
      "Nova is an offline-first assistant built for rural students, keeping study material and tools usable without a reliable connection.",
    tags: ["Android", "Offline-first", "Edge-AI"],
    repo: "https://github.com/angbmz364/nova-android",
  },
];
