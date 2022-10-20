import { useEffect, useState } from "react";
import {
  Button,
  Box,
  Card,
  Flex,
  Heading,
  Input,
  ThemeProvider,
  themes,
} from "ui";

type AvailableThemes = keyof typeof themes;

type Tweet = {
  content: string;
  time: number;
};

export default function Challenge() {
  const defaultTheme: AvailableThemes = "nineties";
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [currentTheme, setCurrentTheme] =
    useState<AvailableThemes>(defaultTheme);
  //get items from localStorage
  useEffect(() => {
    const retrievedObject: any = localStorage.getItem("tweets");
    if (retrievedObject) {
      setTweets(JSON.parse(retrievedObject));
    }
  }, []);
  const renderTweet = () => {
    const now = new Date();
    return tweets.map((i) => {
      //compare time
      let timeDif = (now.getTime() - i.time) / 1000;
      let timeString = "";
      if (timeDif < 10) {
        timeString = "1 second";
      } else if (10 < timeDif && timeDif <= 3600) {
        timeString = Math.round(timeDif / 60) + " minutes";
      } else if (3600 < timeDif && timeDif < 3600 * 24) {
        timeString = Math.round(timeDif / 3600) + " hours";
      } else if (3600 * 24 < timeDif) {
        timeString = Math.round(timeDif / (3600 * 24)) + " days";
      }

      return (
        <Card mb={4} ml={4} p={3} key={i.time}>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Heading as="h3">Name</Heading>
            <Box as="time" color="lightgray">
              {timeString} ago
            </Box>
          </Flex>

          <Box as="p" sx={{ pt: 2 }}>
            {i.content}
          </Box>
        </Card>
      );
    });
  };

  //submit the form
  const addTweet = (e: any) => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
    e.preventDefault();
    const time = new Date();
    const tweet: Tweet = {
      content: input,
      time: time.getTime(),
    };
    if (input !== "") {
      setInput("");
      setTweets([...tweets, tweet]);
    }
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <Flex
        sx={{
          justifyContent: "center",
          maxWidth: "850px",
          margin: "64px auto",
        }}
      >
        <Box sx={{ width: "33%" }}>
          <Card sx={{ p: 4 }}>
            <Heading as="h1">Welcome back, Human!</Heading>
            <Box
              as="form"
              onSubmit={(e) => {
                addTweet(e);
              }}
              mt={4}
            >
              <Input
                placeholder="What's happening? "
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                required
                maxLength={100}
              />
              <Button type="submit" mt={2}>
                Tweet
              </Button>
            </Box>

            <Heading as="h5" mt={4} mb={2}>
              Theme switcher
            </Heading>
            <Button onClick={() => setCurrentTheme("modern")}>Modern</Button>
            <Button onClick={() => setCurrentTheme("nineties")} ml={2}>
              90s
            </Button>
            <Button onClick={() => setCurrentTheme("myTheme")} ml={3} mt="2">
              New
            </Button>
          </Card>
        </Box>

        <Box sx={{ width: "66%" }}>{renderTweet()}</Box>
      </Flex>
    </ThemeProvider>
  );
}
