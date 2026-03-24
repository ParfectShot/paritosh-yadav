export type Photograph = {
  slug: string;
  title: string;
  alt: string;
  src: string;
  capturedAt: string;
  location: string;
  aspect: "portrait" | "landscape" | "square";
  description: string;
  tags: string[];
  thoughts?: string[];
};

export type PhotoStory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  location: string;
  season: string;
  tags: string[];
  photos: Photograph[];
};

// Replace the image URLs below with your own hosted photographs when ready.
export const photoStories: PhotoStory[] = [
  {
    slug: "abu-dhabi-after-hours",
    title: "Abu Dhabi After Hours",
    eyebrow: "Street / City",
    description:
      "Glass, sodium light, and the small pauses between movement. These frames are built around the quieter side of a city that usually gets photographed for scale.",
    location: "Abu Dhabi, UAE",
    season: "Autumn 2025",
    tags: ["Street", "Abu Dhabi", "Night"],
    photos: [
      {
        slug: "corniche-crossing",
        title: "Corniche Crossing",
        alt: "Blurred street crossing with city lights in the background.",
        src: "https://picsum.photos/id/1011/1400/1800",
        capturedAt: "2025-11-18",
        location: "Corniche Road, Abu Dhabi",
        aspect: "portrait",
        description:
          "A clean break of motion against a mostly still street edge.",
        tags: ["Street", "Motion", "Abu Dhabi"],
        thoughts: [
          "This frame worked because the scene felt patient before it felt busy. I waited for a single person to interrupt the geometry instead of filling the frame with traffic.",
          "It is the kind of photograph where the negative space does as much work as the subject.",
        ],
      },
      {
        slug: "glass-and-heat",
        title: "Glass and Heat",
        alt: "Reflective building facade catching warm evening light.",
        src: "https://picsum.photos/id/1015/1800/1200",
        capturedAt: "2025-11-19",
        location: "Al Maryah edge",
        aspect: "landscape",
        description:
          "The city flattening into color and reflection near the end of the day.",
        tags: ["Architecture", "Abu Dhabi", "Light"],
      },
      {
        slug: "platform-pause",
        title: "Platform Pause",
        alt: "Single commuter waiting under overhead lights.",
        src: "https://picsum.photos/id/1025/1400/1800",
        capturedAt: "2025-11-22",
        location: "Transit platform",
        aspect: "portrait",
        description:
          "A still frame built around repetition, distance, and one subject holding the center.",
        tags: ["Street", "People", "Night"],
      },
    ],
  },
  {
    slug: "winter-passages",
    title: "Winter Passages",
    eyebrow: "Travel / Mountain",
    description:
      "A colder, quieter series where the subject is not the landscape alone, but how people move through it. The frames are slower and more open than the street work.",
    location: "Northern India",
    season: "Winter 2024",
    tags: ["Winter", "Travel", "Mountain"],
    photos: [
      {
        slug: "ridge-before-sunrise",
        title: "Ridge Before Sunrise",
        alt: "Snow ridge with dim blue light before sunrise.",
        src: "https://picsum.photos/id/1036/1800/1200",
        capturedAt: "2024-12-27",
        location: "Mountain ridge",
        aspect: "landscape",
        description:
          "The light had not arrived yet, which is exactly why the frame held.",
        tags: ["Winter", "Landscape", "Blue Hour"],
        thoughts: [
          "I did not want this one to feel dramatic. The appeal was in how restrained the scene already was, so the edit stayed almost neutral.",
        ],
      },
      {
        slug: "tea-stop-window",
        title: "Tea Stop Window",
        alt: "Fogged window of a roadside tea stop with warm interior light.",
        src: "https://picsum.photos/id/1040/1400/1800",
        capturedAt: "2024-12-28",
        location: "Roadside tea stop",
        aspect: "portrait",
        description:
          "Warm light leaking into a day that otherwise stayed muted.",
        tags: ["People", "Travel", "Warmth"],
      },
      {
        slug: "switchback-silence",
        title: "Switchback Silence",
        alt: "Winding mountain road cutting through a quiet hillside.",
        src: "https://picsum.photos/id/1043/1800/1200",
        capturedAt: "2024-12-29",
        location: "Highway turn",
        aspect: "landscape",
        description:
          "A transition frame. Less about destination, more about the distance between places.",
        tags: ["Travel", "Road", "Winter"],
      },
    ],
  },
  {
    slug: "market-rhythm",
    title: "Market Rhythm",
    eyebrow: "People / Color",
    description:
      "A denser set of frames driven by repetition, small gestures, and color collisions. These work best when seen together instead of as isolated singles.",
    location: "Old city market",
    season: "Spring 2025",
    tags: ["Street", "People", "Color"],
    photos: [
      {
        slug: "red-awning-noon",
        title: "Red Awning, Noon",
        alt: "Market lane with a red awning and moving shoppers.",
        src: "https://picsum.photos/id/1050/1800/1200",
        capturedAt: "2025-03-14",
        location: "Main lane",
        aspect: "landscape",
        description:
          "Crowd movement compressed under one strong color field.",
        tags: ["Color", "Street", "Market"],
      },
      {
        slug: "counter-gesture",
        title: "Counter Gesture",
        alt: "Close scene of hands exchanging goods across a market counter.",
        src: "https://picsum.photos/id/1060/1400/1800",
        capturedAt: "2025-03-14",
        location: "Spice counter",
        aspect: "portrait",
        description:
          "The frame is really about hands, not faces. That kept the moment specific.",
        tags: ["People", "Detail", "Market"],
        thoughts: [
          "I like photographs that imply a wider scene without spelling it out. This one keeps enough context to orient you, then lets the gesture carry the frame.",
        ],
      },
      {
        slug: "closing-lights",
        title: "Closing Lights",
        alt: "Rows of market lights turning on at dusk.",
        src: "https://picsum.photos/id/1067/1800/1200",
        capturedAt: "2025-03-15",
        location: "Outer lane",
        aspect: "landscape",
        description:
          "The market shifting from daylight rhythm into evening structure.",
        tags: ["Night", "Color", "Street"],
      },
    ],
  },
];

export const photographs = photoStories.flatMap((story) =>
  story.photos.map((photo) => ({
    ...photo,
    storySlug: story.slug,
    storyTitle: story.title,
    storyDescription: story.description,
    storyTags: story.tags,
  })),
);

export type PhotographyPhoto = (typeof photographs)[number];

export function getPhotoStory(slug: string) {
  return photoStories.find((story) => story.slug === slug);
}

export function getPhotograph(slug: string) {
  return photographs.find((photo) => photo.slug === slug);
}

export function formatPhotoDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export const photographyTags = Array.from(
  new Set(photoStories.flatMap((story) => [...story.tags, ...story.photos.flatMap((photo) => photo.tags)])),
).sort((left, right) => left.localeCompare(right));
