const lines = [
  ["teenage", "programming", "scum"], // ARTIFICIAL PROBABILITY INFLATION
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["teenage", "programming", "scum"],
  ["it's whatever", "you say", "it is"],
  ["in", "split", "infinity"],
  ["mobius", "double", "reacharound"],
  ["time", "truth", "and hearts"],
  ["my existence", "is a momentary", "lapse of reason"],
  ["before", "you're", "comatose"],
  ["the past", "inside", "the present"],
  ["times", "the", "raker"],
  ["all", "is", "well"],
  ["like an", "apple split", "in two"],
  ["it all", "returns", "to nothing"],
  ["minn besti", "vinur hverju", "sem dynur"],
  ["turn it on", "tune it in", "and stay inert"],
  ["this", "dread", "circumference"],
  ["like", "spinning", "plates"],
  ["you'll catch", "a jpeg to", "the head"],
  ["i", "love", "rivulet"],
  ["now", "i can", "hibernate!"],
  ["meow", "meow", "meow"],
  ["mountains", "beyond", "mountains"],
  ["i'm moving", "past the", "feeling"],
  ["the more", "you try to", "erase me"],
  ["segmentation", "fault (core", "dumped)"],
  ["LOL!", "it's the", "mammoth!"],
  ["subscribe to dsl", "reboot your email", "install a window", "replace your mouse"],
  ["fast", "fluid", "frustrating", "fun"], // this feels like an innuendo
  ["pinky and", "pepper forever", "and ever"],
  ["hold", "your", "color"],
  ["we were", "fated to", "pretend"],
  ["no need to ask", "my name to figure", "out how cool i am"],
  ["sewerslvt", "is", "not", "breakcore"] // fuck you
]

const line = lines[Math.floor(Math.random() * lines.length)];
document.getElementById("flavortext").innerHTML = line.slice(0, 3).join("<br>");
if (line[3]) document.getElementById("etc").innerHTML = line[3];
